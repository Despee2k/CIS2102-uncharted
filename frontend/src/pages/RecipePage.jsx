import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Ingredients from "../components/RecipePage/Ingredients";
import Procedure from "../components/RecipePage/Procedure";
import RecipeInfo from "../components/RecipePage/RecipeInfo";
import recipes from "../data/recipes";

const RecipePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
        <div className="flex">
            <Ingredients ingredients={recipes[0].ingredients} />
            <div className="overflow y-auto">
              <RecipeInfo  
                title={recipes[0].title}
                image={recipes[0].image}
                rating={recipes[0].rating}
                description={recipes[0].description}
                author={recipes[0].author}
                datePosted={recipes[0].datePosted}
                readyIn={recipes[0].readyIn}
                serving={recipes[0].serving}
              />
              <Procedure procedure={recipes[0].procedure} />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default RecipePage;