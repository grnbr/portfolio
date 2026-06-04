import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

import { EMPTY_PLACEHOLDER } from '@/shared/constants';

import styles from '../Form.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMsg?: string;
  id: string;
  label: null | string;
};
const Input: FC<InputProps> = ({
  errorMsg,
  id,
  label,
  ...rest
}: InputProps) => {
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
};

export default Input;
