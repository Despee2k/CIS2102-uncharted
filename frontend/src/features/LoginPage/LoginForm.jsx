import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContainer from '../../components/FormContainer';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8088/api/auth/login', {
        email,
        password
      });

      // Save token and user info to localStorage
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      toast.success('Login successful!', {
        position: "bottom-right",
        autoClose: 3000,
      });

      // Redirect to home page
      navigate('/');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <FormContainer title="Log In">
      <form onSubmit={handleLogin}>
        <FormInput
          type="email"
          name="Email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon="email"
        />
        <FormInput
          type="password"
          name="Password"
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
        <div className="text-center mt-4">
          <span>Dont have an account? </span>
          <Link to="/signup" className="text-blue-500">
            Sign Up
          </Link>
        </div>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

export default LoginForm;