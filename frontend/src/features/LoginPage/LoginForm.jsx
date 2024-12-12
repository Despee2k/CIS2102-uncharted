import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

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
    <div className=" flex justify-center pt-32">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full margin-bottom">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Enter your Email
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaEnvelope className="text-black-400" />
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="ml-2 w-full border-none focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </label>
            <div className="flex items-center border rounded px-3 py-2">
              <FaLock className="text-black-400" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="ml-2 w-full border-none focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <Link to="/forgot-password" className="text-blue-500 text-sm">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-[#B17457] text-white py-2 rounded hover:bg-opacity-90 transition duration-300"
          >
            Login
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <div className="text-center mt-4">
            <span>Don’t have an account? </span>
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
