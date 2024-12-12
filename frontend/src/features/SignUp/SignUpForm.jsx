import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';
import FormInput from '../../components/FormInput';
import Button from '../../components/Button';

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Simulate signup logic
      alert('Signup successful!');
      window.location.href = '/';
    } catch (err) {
      setError('Signup failed');
    }
  };

  return (
    <FormContainer title="Sign Up">
      <form onSubmit={handleSignup} className="signup-form">
        <FormInput
          type="Username"
          name="Username"
          value={username}
          placeholder="Enter your Username"
          onChange={(e) => setUsername(e.target.value)}
          icon="person"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            type="FirstName"
            name="First Name"
            
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            icon="person"
          />
          <FormInput
            type="LastName"
            name="Last Name"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            icon="person"
          />
        </div>

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
        <Button label="Sign Up" type="submit" />
        {error && <p className="text-red-500 mt-2">{error}</p>}
        <div className="text-center mt-4">
          <span>Already have an account? </span>
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </form>
    </FormContainer>
  );
};

export default SignupForm;
