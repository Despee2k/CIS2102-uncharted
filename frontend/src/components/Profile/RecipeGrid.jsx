const RecipeGrid = ({ recipes }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{recipe.title}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default RecipeGrid;
  ``