import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ingredients from "../components/RecipePage/Ingredients";
import Procedure from "../components/RecipePage/Procedure";
import RecipeInfo from "../components/RecipePage/RecipeInfo";

const RecipePage = () => {
  const location = useLocation();
  const { recipe } = location.state || {};

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="flex justify-center items-center h-full">
          <p>Recipe not found</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
        <div className="flex">
            <Ingredients ingredients={recipe.ingredients} />
            <div className="overflow-y-auto">
              <RecipeInfo  
                title={recipe.title}
                image={recipe.image}
                rating={recipe.rating || 4.5}
                description={recipe.description}
                author={recipe.author || 'Unknown'}
                datePosted={recipe.datePosted || 'Recently'}
                readyIn={recipe.readyIn || 'Not specified'}
                serving={recipe.servings || 'Not specified'}
              />
              <Procedure procedure={recipe.procedure} />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default RecipePage;