'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { LoginFormData, LoginResponse, schemas } from '@portfolio/types';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';

import { apiFetch } from '@/shared/lib/api/apiFetch';
import { API_BASE } from '@/shared/lib/api/constants';

import Input from './Input';
import styles from './LoginForm.module.scss';

const LoginForm = () => {
  const router = useRouter();

  const {
    clearErrors,
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<LoginFormData>({
    resolver: zodResolver(schemas.LoginRequest),
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const res = await apiFetch({
        baseURL: API_BASE.admin,
        body: data,
        endpoint: '/auth/login',
        method: 'POST',
      });

      if (!res.ok) {
        setError('root', { message: res.error.error });
        return;
      }

      router.push('/admin/messages');
    } catch (error) {
      console.error(error);
      setError('root', { message: 'Something went wrong' });
    }
  };

  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register('password', {
          onChange: () => clearErrors('root'),
        })}
        autoFocus
        errorMsg={errors.root?.message}
      />
    </form>
  );
};

export default LoginForm;
