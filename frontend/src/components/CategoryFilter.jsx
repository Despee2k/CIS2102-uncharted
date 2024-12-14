import Proptypes from "prop-types";

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-start space-x-4 my-6">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-6 py-2 rounded-md outline outline-1 outline-black ${
            activeCategory === category
              ? 'bg-accent text-white'
              : 'bg-dominant text-gray-700'
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  categories: Proptypes.array.isRequired,
  activeCategory: Proptypes.string.isRequired,
  setActiveCategory: Proptypes.func.isRequired,
};
