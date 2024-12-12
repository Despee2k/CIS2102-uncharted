
import Header from '../features/LoginPage/Header';
import SignUpForm from '../features/SignUp/SignUpForm';
import '../styling/AuthPage.css';

const SignUpPage = () => {
  return (
    <>
      <Header title="Uncharted Creatives" />
        <SignUpForm />
        <footer className="auth-footer">
          © 2024 Uncharted Creatives. All rights reserved.
        </footer>
    
    </>
  );
};

export default SignUpPage;