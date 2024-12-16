import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ingredients from "../components/RecipePage/Ingredients";
import Procedure from "../components/RecipePage/Procedure";
import RecipeInfo from "../components/RecipePage/RecipeInfo";

const RecipePage = () => {
  const location = useLocation();
  const [recipe, setRecipe] = useState(location.state?.recipe);
  const [mealType, setMealType] = useState('breakfast');
  const [day, setDay] = useState('Monday');

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <p>Loading recipe...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleRatingUpdate = (newRating) => {
    setRecipe(prevRecipe => ({
      ...prevRecipe,
      rating: newRating
    }));
  };

  const handleAddToMealPlan = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:8088/api/recipes/meal-plan', 
        { 
          recipeId: recipe.id, 
          day, 
          mealType 
        },
        {
          headers: {
            Authorization: token
          }
        }
      );
      alert('Recipe added to meal plan!');
    } catch (error) {
      console.error('Failed to add recipe to meal plan:', error);
      alert('Failed to add recipe to meal plan');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <Ingredients ingredients={recipe.ingredients} />
        <div className="overflow-y-auto">
          <RecipeInfo  
            recipe={recipe}
            onRatingUpdate={handleRatingUpdate}
          />
          <Procedure procedure={recipe.procedure} />
          
          {/* Add to Meal Plan Section */}
          <div className="p-4 bg-white shadow rounded-lg mt-4">
            <h3 className="text-lg font-semibold mb-3">Add to Meal Plan</h3>
            <div className="space-y-2">
              <select 
                value={day} 
                onChange={(e) => setDay(e.target.value)}
                className="w-full p-2 border rounded"
              >
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <select 
                value={mealType} 
                onChange={(e) => setMealType(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
              <button 
                onClick={handleAddToMealPlan}
                className="w-full bg-accent text-white p-2 rounded hover:bg-accent-dark"
              >
                Add to Meal Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipePage;