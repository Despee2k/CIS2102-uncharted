import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ingredients from "../components/RecipePage/Ingredients";
import Procedure from "../components/RecipePage/Procedure";
import RecipeInfo from "../components/RecipePage/RecipeInfo";

const RecipePage = () => {
  const location = useLocation();
  const [recipe, setRecipe] = useState(location.state?.recipe);

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
  console.log("BEFORE RECIPE: ", recipe);
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipePage;