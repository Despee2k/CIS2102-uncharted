import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]); // Ensure it's always an array
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);

    toast.success("Logout successful!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    navigate("/");
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
  
    const token = localStorage.getItem("token"); // Get token from localStorage
  
    try {
      const response = await axios.get(
        `http://localhost:8088/api/recipes/search?query=${encodeURIComponent(searchQuery)}`,
        {
          headers: {
            Authorization: token
          },
        }
      );
      setSearchResults(response.data);
      setIsDropdownOpen(true);
    } catch (error) {
      console.error("Error during search:", error);
      toast.error("Failed to search. Please try again.", {
        position: "top-center",
      });
    }
  };
  

  const handleResultClick = (id) => {
    setIsDropdownOpen(false);
    navigate(`/recipepage/${id}`);
  };

  const getFirstName = (name) => {
    if (name) {
      const names = name.split(" ");
      return names[0];
    }
    return "User";
  };

  const getProfilePic = (user) => {
    if (user) {
      return (
        <img
          src={user.profilePic}
          alt={user.name}
          className="h-10 w-10 rounded-full"
        />
      );
    }
    return (
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
    );
  };

  return (
    <>
      <header className="header p-4 bg-[#FAF7F0] shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
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

          <nav className="flex items-center space-x-6">
            <Link
              to="/menu"
              className="text-lg font-medium text-black hover:text-accent transition duration-300"
            >
              Menu
            </Link>
            {user ? (
              <>
                <Link
                  to="/addrecipe"
                  className="text-lg font-medium text-black hover:text-accent transition duration-300"
                >
                  Add Recipe
                </Link>
                <Link
                  to="/meal-plan"
                  className="text-lg font-medium text-black hover:text-accent transition duration-300"
                >
                  Meal Plan
                </Link>
              </>
            ) : (
              <>
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
              </>
            )}
          </nav>

          <div className="relative">
            <form
              className="flex items-center border border-accent rounded-md px-3 py-1 w-72"
              onSubmit={handleSearch}
            >
              <FaSearch className="text-primary mr-2" />
              <input
                type="text"
                placeholder="Search recipes"
                className="bg-transparent focus:outline-none text-black w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>

            {isDropdownOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 shadow-md w-full mt-2 rounded-md z-50">
                <ul>
                  {searchResults.map((result) => (
                    <li
                      key={result.id}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleResultClick(result.id)}
                    >
                      {result.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="text-lg font-medium text-gray-700 hover:underline transition duration-300"
                >
                  Hello, {getFirstName(user.name || user.email)}
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-accent text-white rounded-md hover:bg-opacity-90 transition duration-300"
                >
                  Logout
                </button>
              </div>
            ) : (
              getProfilePic(user)
            )}
          </div>
        </div>
      </header>
      <ToastContainer />
    </>
  );
};

export default Navbar;

