'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { EMPTY_PLACEHOLDER } from '@/shared/constants';
import { Dictionary } from '@/shared/dictionaries/types';
import { ContactFieldsId } from '@/shared/dictionaries/types/contactTypes';
import { ZodIssueCode } from '@/shared/dictionaries/types/sharedTypes';
import Button from '@/shared/ui/button/Button';

import styles from './Form.module.scss';

export type ContactFormData = Record<ContactFieldsId, string>;

type FormProps = {
  dict: Dictionary;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMsg?: string;
  id: string;
  label: null | string;
};

const schema = z.object({
  email: z.string().min(1).check(z.email()),
  message: z.string().min(10),
  name: z.string(),
  subject: z.string(),
});

const Form: FC<FormProps> = ({ dict }) => {
  const {
    formState: { errors: formErrors },
    handleSubmit,
    register,
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const formDict = dict.pages.contact.form;
  const { buttons, fields, title } = formDict;
  const { inputs, textarea } = fields;
  const sendBtn = buttons.send;

  const messageError = formErrors['message'];
  const messageErrorText = messageError?.message
    ? textarea.errors?.[messageError.type as ZodIssueCode]
    : messageError?.message;

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch('/api/contact', {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const json = await res.json();
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
        <Button className={styles.sendBtn} type="submit" variant="primary">
          {sendBtn.label}
        </Button>
      </footer>
    </form>
  );
};

function Input({ errorMsg, id, label, ...rest }: InputProps) {
  return (
    <div className={clsx(styles.inputContainer, errorMsg && styles.error)}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={styles.input} id={id} {...rest} />
      <span className={styles.errorText}>{errorMsg ?? EMPTY_PLACEHOLDER}</span>
    </div>
  );
}

export default Form;
