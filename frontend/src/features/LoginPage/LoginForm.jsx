import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Simulate login logic
      alert('Login successful!');
      window.location.href = '/';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <FormContainer title="Log In">
      <form onSubmit={handleLogin}>
        <FormInput
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="email"
        />
        <FormInput
          type="password"
          name="password"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon="password"
        />
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
          <Link to="/forgot-password" className="text-blue-500 text-sm">
            Forgot Password?
          </Link>
        </div>
        <Button label="Login" type="submit" />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="text-center mt-4">
          <span>Don’t have an account? </span>
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
