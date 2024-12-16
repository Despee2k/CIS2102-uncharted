import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FiChevronLeft, FiClock } from "react-icons/fi";
import Sidebar from "../components/Admin/Sidebar";

const PendingDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { recipeId } = useParams();
  const navigate = useNavigate();

  // Get admin user info from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const adminName = storedUser?.name || 'Admin'; // Default to 'Admin' if not found
  
  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8088/api/recipes/pending/${recipeId}`, {
          headers: { 
            Authorization: token 
          }
        });
        setRecipe(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'An error occurred');
        setLoading(false);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  const handleApproveRecipe = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:8088/api/recipes/${recipeId}/approve`, {}, {
        headers: { 
          Authorization: token 
        }
      });
      navigate('/admin-dashboard');
    } catch (err) {
      console.error("Error approving recipe:", err);
    }
  };

  const handleRejectRecipe = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.patch(`http://localhost:8088/api/recipes/${recipeId}/reject`, {}, {
        headers: { 
          Authorization: token 
        }
      });
      navigate('/admin-dashboard');
    } catch (err) {
      console.error("Error rejecting recipe:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 flex justify-center items-center">
          <p>Loading recipe details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 flex justify-center items-center">
          <p>Error loading recipe details. Please try again.</p>
        </div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 p-6 flex justify-center items-center">
          <p>No recipe found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      <div className="flex-1 p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold flex items-center">
            <FiClock className="mr-2" /> Pending Details
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p>
                Hey, <strong>{adminName}</strong>
              </p>
              <strong>Admin</strong>
            </div>
          </div>
        </div>

        <div className="flex-grow px-10 pb-10">
          <h1 className="text-2xl font-semibold text-accent mb-5">PD{recipe.id.toString().padStart(9, '0')}</h1>

          <div className="flex flex-row justify-between gap-5 columns-2">
            <div className="flex w-1/2 flex-col">
              <h2 className="text-2xl font-bold">User Information</h2>
              <div className="h-full my-5 w-full px-7 pb-5 pt-3 rounded-3xl bg-white shadow-md duration-300 hover:shadow-none">
                <table className="w-full text-left">
                  <tbody>
                    <tr>
                      <th className="font-semibold py-2">User Name:</th>
                      <td className="px-4 py-2 font-semibold">{recipe.user}</td>
                    </tr>
                    <tr>
                      <th className="font-semibold py-2">Email:</th>
                      <td className="px-4 py-2 font-semibold">{recipe.userEmail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex w-1/2 flex-col">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Requested Information</h2>
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => navigate('/admin/pending-recipes')}
                >
                  <FiChevronLeft size={28} />
                </button>
              </div>
              <div className="h-full my-5 w-full px-7 pb-5 pt-3 rounded-3xl bg-white shadow-md duration-300 hover:shadow-none">
                <table className="w-full text-left">
                  <tbody>
                    <tr>
                      <th className="font-semibold py-2">Requested Date:</th>
                      <td className="px-4 py-2 font-semibold">
                        {new Date(recipe.requestDate).toLocaleDateString()}
                      </td>
                    </tr>
                    <tr>
                      <th className="font-semibold py-2">Status:</th>
                      <td className="px-4 py-2 text-yellow-500 font-semibold">Pending</td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex flex-row justify-end pt-5 space-x-3">
                  <h1 className="font-semibold pb-2">Request Status:</h1>
                  <button 
                    className="py-2 px-8 text-sm font-semibold text-white bg-red-600 rounded-3xl duration-200 hover:bg-red-700"
                    onClick={handleRejectRecipe}
                  >
                    Reject
                  </button>
                  <button 
                    className="py-2 px-8 text-sm font-semibold text-white bg-green-600 rounded-3xl duration-200 hover:bg-green-700"
                    onClick={handleApproveRecipe}
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Recipe Details</h2>
            <div className="mt-6 px-7 pb-5 pt-3 rounded-3xl bg-white shadow-lg hover:shadow-none duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-2xl font-bold">{recipe.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">
                    <span className="font-bold">Serving:</span> {recipe.servings} People |{" "}
                    <span className="font-bold">Ready in:</span> {recipe.prepTime} mins
                  </p>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-semibold mb-2">Category:</h4>
                    <span className="py-1 px-2 bg-accent rounded-lg text-white">{recipe.category}</span>
                  </div>
                  <h4 className="font-semibold mb-2 mt-4">Ingredients:</h4>
                  <ul className="list-disc list-inside mb-4 text-gray-700">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient.ingredient}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2 mt-10">Procedure:</h4>
                  <ol className="list-decimal list-inside space-y-2 text-black">
                    {recipe.procedure.map((step, index) => (
                      <li key={index}>{step.step}</li>
                    ))}
                  </ol>
                </div>

                <div>
                  <div className="mt-6">
                    <h4 className="font-semibold">Recipe Image:</h4>
                    <img 
                      src={`http://localhost:8088/${recipe.recipeImage}`} 
                      alt="Recipe" 
                      className="mt-4 rounded-lg w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingDetails;
