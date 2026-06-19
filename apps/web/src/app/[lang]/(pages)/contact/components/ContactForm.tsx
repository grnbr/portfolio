'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormData, schemas, ZodIssueCode } from '@portfolio/types';
import clsx from 'clsx';
import { FC, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';

import { EMPTY_PLACEHOLDER } from '@/shared/constants';
import { Dictionary } from '@/shared/dictionaries/types';
import useIsMounted from '@/shared/hooks/useIsMounted';
import { apiFetch } from '@/shared/lib/api/apiFetch';
import { API_BASE } from '@/shared/lib/api/constants';
import Button from '@/shared/ui/button/Button';

import styles from './ContactForm.module.scss';
import Input from './ui/Input';
import Modal from './ui/Modal';

const COOLDOWN_MS = 10000; // 10 seconds

type FormProps = {
  dict: Dictionary;
};

const Form: FC<FormProps> = ({ dict }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);
  const isMounted = useIsMounted();

  const {
    formState: { errors: formErrors, isDirty, isSubmitting },
    handleSubmit,
    register,
  } = useForm<ContactFormData>({
    mode: 'onChange',
    resolver: zodResolver(schemas.ContactRequest),
    shouldFocusError: false,
  });

  const formDict = dict.pages.contact.form;
  const { buttons, fields, title } = formDict;
  const { inputs, textarea } = fields;
  const sendBtn = buttons.send;

  const messageError = formErrors['message'];
  const messageErrorText = messageError?.message
    ? textarea.errors?.[messageError.type as ZodIssueCode]
    : messageError?.message;

  const onOpenModal = () => setIsModalOpen(true);
  const onCloseModal = () => setIsModalOpen(false);

  const onSubmit = async (data: ContactFormData) => {
    console.log(1);
    try {
      await apiFetch({
        baseURL: API_BASE.public,
        body: data,
        endpoint: '/v1/contact',
        method: 'POST',
      });

      onOpenModal();
      setIsCooldown(true);
      setTimeout(() => setIsCooldown(false), COOLDOWN_MS);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <header className={styles.header}>{title}</header>
      <div className={styles.content}>
        <div className={styles.inputs}>
          {inputs.map((input) => {
            const formError = formErrors[input.id];
            const errorLabel = formError?.message
              ? input.errors?.[formError.type as ZodIssueCode]
              : formError?.message;

            return (
              <Input
                errorMsg={errorLabel}
                id={input.id}
                key={input.id}
                label={input.label}
                placeholder={input.placeholder}
                type={input.type}
                {...register(input.id)}
              />
            );
          })}
        </div>

        <hr className={styles.divider} />

        <div
          className={clsx(
            styles.textareaContainer,
            messageErrorText && styles.error,
          )}
        >
          <textarea
            className={styles.textarea}
            id={textarea.id}
            placeholder={textarea.placeholder}
            {...register('message')}
          ></textarea>

          <span className={styles.errorText}>
            {messageErrorText ?? EMPTY_PLACEHOLDER}
          </span>
        </div>
      </div>

      <footer className={styles.footer}>
        <Button
          className={styles.sendBtn}
          disabled={isSubmitting || !isDirty || isCooldown}
          isLoading={isSubmitting}
          type="submit"
          variant="primary"
        >
          {sendBtn.label}
        </Button>
      </footer>

      {isMounted &&
        createPortal(
          <Modal isModalOpen={isModalOpen} onCloseModal={onCloseModal} />,
          document.body,
        )}
    </form>
  );
};

export default Form;
