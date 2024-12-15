import { useState, useEffect } from "react";
import axios from "axios";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileTabs from "../components/Profile/ProfileTabs";
import RecipeCard from "../components/Recipe/RecipeCard"; // Using RecipeCard for consistent styling
import MealPlanGrid from "../components/Profile/MealPlanGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        // Fetch user profile
        const userResponse = await axios.get("http://localhost:8088/api/auth/me", {
          headers: {
            Authorization: token,
          },
        });
        setUser(userResponse.data);

        // Fetch user's recipes
        const recipesResponse = await axios.get(
          "http://localhost:8088/api/recipes/user",
          {
            headers: {
              Authorization: token,
            },
          }
        );

        const transformedRecipes = recipesResponse.data.map((recipe) => ({
          id: recipe.id,
          category: recipe.category,
          title: recipe.title,
          image: `http://localhost:8088${recipe.picture}`, // Full URL for image
          description: recipe.description,
          ingredients: recipe.ingredients.map((ing) => ing.ingredient),
          procedure: recipe.procedure.map((proc) => proc.step),
          rating: 4.5, // Placeholder rating
          servings: recipe.servings,
          readyIn: `${recipe.prepTime} mins`,
          datePosted: recipe.createdAt
            ? new Date(recipe.createdAt).toLocaleDateString()
            : "Recently",
        }));

        setRecipes(transformedRecipes);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        navigate("/login");
      }
    };

    fetchProfileData();
  }, [navigate]);

  const mealPlan = [
    {
      id: 1,
      day: "Monday",
      breakfast: 1,
      lunch: 2,
      dinner: 3,
    },
    // ... other days
  ];

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 h-full flex-grow">
        {/* Profile Header */}
        <ProfileHeader
          profilePicture="https://via.placeholder.com/150" // Replace with actual profile picture field if available
          name={user.name}
          handle={user.email.split("@")[0]}
          bio="A passionate home chef" // Placeholder
          stats={{
            posts: recipes.length,
            followers: 0, // Placeholder
            following: 0, // Placeholder
          }}
        />

        <ProfileActions />

        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="max-w-6xl mx-auto px-4 mt-6">
          {activeTab === "posts" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  recipe={recipe}
                  onClick={() =>
                    navigate(`/recipepage/${recipe.id}`, { state: { recipe } })
                  }
                />
              ))}
            </div>
          )}
          {activeTab !== "posts" && (
            <MealPlanGrid
              mealPlan={mealPlan}
              recipes={recipes}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfilePage;
