import { useEffect, useState } from "react";
import axios from 'axios';
import { MdDashboard } from "react-icons/md";
import { FiCheckCircle, FiClock, FiXCircle } from "react-icons/fi";
import { useNavigate, Link } from "react-router-dom";
import Sidebar from "../components/Admin/Sidebar";

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [pendingRecipes, setPendingRecipes] = useState([]);
  const [analytics, setAnalytics] = useState({
    accepted: 0,
    pending: 0,
    rejected: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem('token');

    console.log("Stored User:", storedUser);
    console.log("Stored User Token:", token);  // Log the token
    
    if (!storedUser || storedUser.role !== "ADMIN" || !token) {
      navigate("/login"); 
    } else {
      setUser(storedUser);
      fetchDashboardData(token);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const fetchDashboardData = async (token) => {
    try {
      // Fetch pending recipes
      const recipesResponse = await axios.get('http://localhost:8088/api/recipes/pending', {
        headers: { 
          Authorization: token // Use the token directly
        }
      });
      console.log("Pending Recipes Response:", recipesResponse.data);
      setPendingRecipes(recipesResponse.data);
  
      // Calculate analytics
      setAnalytics({
        pending: recipesResponse.data.length,
        accepted: 0,
        rejected: 0
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      // Optionally handle unauthorized error
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
    }
  };
  
 
  if (!user) return null;

  return (
    <div className="flex bg-[#F6F6F9] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6">
        {/* Header Section */}
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold flex items-center">
            <MdDashboard className="mr-2" /> Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p>
                Hey, <strong>{user.name}</strong>
              </p>
              <strong>Admin</strong>
            </div>
          </div>
        </header>

        {/* Analytics Cards */}
        <section>
          <h2 className="text-xl font-bold mb-4">Analytics</h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiCheckCircle className="text-green-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Accepted</p>
                <h2 className="text-2xl font-bold">{analytics.accepted}</h2>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiClock className="text-yellow-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Pending</p>
                <h2 className="text-2xl font-bold">{analytics.pending}</h2>
              </div>
            </div>
            <div className="flex items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-sm transition">
              <FiXCircle className="text-red-500 text-3xl mr-4" />
              <div>
                <p className="text-sm font-medium text-gray-500">Rejected</p>
                <h2 className="text-2xl font-bold">{analytics.rejected}</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Pending Recipes */}
        <section className="mt-10">
          <h2 className="text-xl font-bold mb-4">Recent Pending Recipes</h2>
          <div className="w-full overflow-x-auto rounded-3xl bg-white px-5 pb-5 pt-3 shadow-[0_2rem_3rem_rgba(132,139,200,0.18)] duration-300 hover:shadow-none">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-center font-semibold">Recipe ID</th>
                  <th className="px-6 py-3 text-center font-semibold">Title</th>
                  <th className="px-6 py-3 text-center font-semibold">User</th>
                  <th className="px-6 py-3 text-center font-semibold">Request Date</th>
                </tr>
              </thead>
              <tbody>
                {pendingRecipes.map((recipe) => (
                  <tr key={recipe.id} className="hover:bg-gray-50">
                    <td className="px-6 py-3 text-center">
                      <Link 
                        to={`/post-details/${recipe.id}`} 
                        state={{ recipe }}
                        className="text-accent underline"
                      >
                        {recipe.id}
                      </Link>
                    </td>
                    <td className="px-6 py-3 text-center">{recipe.title}</td>
                    <td className="px-6 py-3 text-center">{recipe.user}</td>
                    <td className="px-6 py-3 text-center">
                      {new Date(recipe.requestDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;