import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for user in localStorage on component mount
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    
    // Update user state
    setUser(null);
    
    // Show logout toast
    toast.success("Logout successful!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Redirect to home page
    navigate('/');
  };

  const getFirstName = (name) => {
    if (name) {
      const names = name.split(" ");
      return names[0]; // Return the first name
    }
    return "User";
  };

  return (
    <>
      <header className="header p-4 bg-[#FAF7F0] shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <div className="flex items-center">
              <img
                src="../../src/assets/Logo1.png"
                alt="Logo"
                className="h-12 w-12 mr-4"
              />
              <span className="text-2xl font-semibold text-black font-heading">
                Uncharted <span className="text-accent">Creatives</span>
              </span>
            </div>
          </Link>

          {/* Navbar Links */}
          <nav className="flex items-center space-x-6">
            <Link
              to="/menu"
              className="text-lg font-medium text-black hover:text-accent transition duration-300"
            >
              Menu
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium text-black hover:text-accent transition duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium text-black hover:text-accent transition duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex items-center border border-accent rounded-md px-3 py-1 w-1/3">
            <FaSearch className="text-primary mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent focus:outline-none text-black w-full"
            />
          </div>

          {/* Login and Sign-Up Buttons */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-700">
                  Hello, {getFirstName(user.name || user.email)}
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-lg font-medium text-black hover:text-accent transition duration-300"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default Navbar;
