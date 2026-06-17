import clsx from 'clsx';
import { FC, InputHTMLAttributes } from 'react';

import { EMPTY_PLACEHOLDER } from '@/shared/constants';

import styles from './LoginForm.module.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  errorMsg?: string;
};

const Input: FC<InputProps> = ({ errorMsg, ...props }) => {
  return (
    <div className={styles.inputContainer}>
      <input
        className={clsx(styles.input, errorMsg && styles.error)}
        placeholder="Input password"
        type="password"
        {...props}
      />
      <span className={styles.errorText}>{errorMsg ?? EMPTY_PLACEHOLDER}</span>
    </div>
  );
};
export default Input;
