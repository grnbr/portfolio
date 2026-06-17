'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, schemas } from '@portfolio/types';
import { useForm } from 'react-hook-form';

import Input from './Input';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const { handleSubmit, register } = useForm<LoginFormData>({
    resolver: zodResolver(schemas.LoginRequest),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await fetch('/api/login', {
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
      });

      const json = await res.json();

      if (!res.ok) {
        console.error(json.error);
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('password')} />
    </form>
  );
};

export default LoginForm;
