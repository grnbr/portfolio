import styles from './Page.module.scss';
import LoginForm from './ui/LoginForm';

const LoginPage = () => {
  return (
    <div className={styles.page}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
