const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="flex flex-start space-x-4 my-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-2 rounded-md outline outline-1 outline-black ${
            activeCategory === category
              ? 'bg-accent text-white'
              : 'bg-dominant text-gray-700'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
