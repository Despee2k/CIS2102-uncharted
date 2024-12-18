import Rating from '@mui/material/Rating';

const RecipeCard = ({ recipe, onClick }) => {
  const precision = Number.isInteger(recipe.rating) ? 1 : 0.5;

  return (
    <div
      onClick={onClick}
      className="bg-secondary p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img
        src={recipe.image}
        alt={recipe.title}
        className="rounded-md mb-4 w-full h-48 object-cover"
      />
      <div className="flex items-center mb-2">
        <Rating
          name="rating-read"
          value={recipe.rating}
          precision={precision}
          readOnly
          sx={{
            color: 'black',
          }}
        />
        <span className="ml-2 text-sm font-medium text-gray-700">
          {recipe.rating.toFixed(1)}
        </span>
      </div>
      <h3 className="text-lg font-semibold">{recipe.title}</h3>
      <p className="text-sm text-black">{recipe.description}</p>
    </div>
  );
};

export default RecipeCard;
