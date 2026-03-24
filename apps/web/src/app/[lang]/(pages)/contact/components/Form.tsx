import { FC, InputHTMLAttributes } from 'react';

import { Dictionary } from '@/shared/dictionaries/types';
import { ContactInputIds } from '@/shared/dictionaries/types/contactTypes';
import Button from '@/shared/ui/button/Button';

import styles from './Form.module.scss';

type FormProps = {
  dict: Dictionary;
};

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: null | string;
};

const Form: FC<FormProps> = ({ dict }) => {
  const formDict = dict.pages.contact.form;
  const { buttons, fields, title } = formDict;
  const { inputs, textarea } = fields;
  const sendBtn = buttons.send;

  return (
    <form className={styles.form}>
      <header className={styles.header}>{title}</header>

      <div className={styles.content}>
        <div className={styles.inputs}>
          {inputs.map((input) => (
            <Input
              id={input.id}
              key={input.id}
              label={input.label}
              placeholder={input.placeholder}
            />
          ))}
        </div>

        <hr className={styles.divider} />

        <div className={styles.textareaWrapper}>
          <textarea
            className={styles.textarea}
            id={textarea.id}
            name={textarea.id}
            placeholder={textarea.placeholder}
          ></textarea>
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

function Input({ id, label, ...rest }: InputProps) {
  const type: InputHTMLAttributes<HTMLInputElement>['type'] =
    id === ContactInputIds.Email ? 'email' : 'text';

  return (
    <div className={styles.inputContainer}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input className={styles.input} id={id} name={id} type={type} {...rest} />
    </div>
  );
}

export default Form;
