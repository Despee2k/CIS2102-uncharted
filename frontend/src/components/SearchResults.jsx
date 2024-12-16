import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const results = location.state?.results || [];

  if (results.length === 0) {
    return <p className="text-center mt-4">No results found.</p>;
  }

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-semibold mb-4">Search Results</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {results.map((recipe) => (
          <div key={recipe.id} className="border p-4 rounded shadow">
            <img
              src={recipe.picture}
              alt={recipe.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
            <p className="text-sm text-gray-500">
              By {recipe.author.name}, {recipe.rating.toFixed(1)} stars
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
