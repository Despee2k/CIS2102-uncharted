import Header from '../features/LoginPage/Header';
import LoginForm from '../features/LoginPage/LoginForm';
import '../styling/AuthPage.css';

const LoginPage = () => {
  return (
    <>
      <Header title="Uncharted Creatives" />
      <div className="">
        <LoginForm />
        <footer className="auth-footer">
          © 2024 Uncharted Creatives. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default LoginPage;
