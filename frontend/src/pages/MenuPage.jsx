import { useState, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Navbar from '../components/Navbar';
import CategoryFilter from '../components/CategoryFilter';
import RecipeCard from '../components/Recipe/RecipeCard';
import { useNavigate } from 'react-router-dom';

const MenuPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const categories = ['Breakfast', 'Lunch', 'Dinner', 'Others'];
  const [activeCategory, setActiveCategory] = useState('Breakfast');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8088/api/recipes');
        if (!response.ok) {
          throw new Error('Failed to fetch recipes');
        }
        const data = await response.json();
        setRecipes(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const transformedRecipes = recipes.map(recipe => ({
    id: recipe.id,
    category: recipe.category,
    title: recipe.title,
    image: `http://localhost:8088${recipe.picture}`,
    description: recipe.description,
    ingredients: recipe.ingredients.map(ing => ing.ingredient),
    procedure: recipe.procedure.map(proc => proc.step),
    rating: 4.5,
    servings: recipe.servings,
    readyIn: `${recipe.prepTime} mins`,
    author: 'Chef',
    datePosted: recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : 'Recently'
  }));

  const filteredRecipes = transformedRecipes.filter(
    (recipe) => recipe.category === activeCategory
  );

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentRecipes = filteredRecipes.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(filteredRecipes.length / itemsPerPage);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentRecipes.map((recipe) => (
            <RecipeCard 
              key={recipe.id} 
              recipe={recipe} 
              onClick={() => navigate(`/recipepage/${recipe.id}`, { state: { recipe } })}
            />
          ))}
        </div>
        <div className="flex justify-end mt-4">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
      <footer className="text-center py-4 text-sm text-gray-500">
        2024 Uncharted Creatives. All rights reserved.
      </footer>
    </div>
  );
};

export default MenuPage;