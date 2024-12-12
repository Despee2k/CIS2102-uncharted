import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormContainer from '../../components/FormContainer';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    
    // Validate passwords match
    if (password !== confirmPassword) {
      toast.error('Passwords do not match', {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    try {
      await axios.post('http://localhost:8088/api/auth/signup', {
        name,
        email,
        password
      });

      toast.success('Signup successful! Please log in.', {
        position: "bottom-right",
        autoClose: 3000,
      });

      // Redirect to login page
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data?.message || 'Signup failed', {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <FormContainer title="Sign Up">
      <form onSubmit={handleSignup} className="signup-form">
        <FormInput
          type="text"
          name="Name"
          value={name}
          placeholder="Enter your Full Name"
          onChange={(e) => setName(e.target.value)}
          icon="person"
        />
        <FormInput
          type="email"
          name="Email"
          value={email}
          placeholder="Enter your Email"
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
        <FormInput
          type="password"
          name="Confirm Password"
          placeholder="Confirm your Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon="password"
        />
        <Button label="Sign Up" type="submit" />
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </form>
      <ToastContainer />
    </FormContainer>
  );
};

export default SignupForm;