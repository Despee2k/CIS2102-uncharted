import { useNavigate } from "react-router-dom";
import RecipeGrid from "../components/Profile/RecipeGrid";
import Navbar from "../components/Navbar";


const ArchivePage = () => {
  const navigate = useNavigate();

  // Dummy archived recipes data
  const archivedRecipes = [
    {
      id: 1,
      title: "Eggs Benedict",
      image: "/images/eggs-benedict.jpg",
    },
    {
      id: 2,
      title: "Banana Bread",
      image: "/images/banana-bread.jpg",
    },
    {
      id: 3,
      title: "Deviled Eggs",
      image: "/images/deviled-eggs.jpg",
    },
    {
      id: 4,
      title: "Grilled Salmon",
      image: "/images/grilled-salmon.jpg",
    },
  ];

  return (
    <>
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Back Button and Archive Title */}
      <div className="flex items-center max-w-6xl mx-auto p-4">
        {/* Back Button */}
        <button
          className="flex items-center text-accent hover:text-accent-dark"
          onClick={() => navigate("/profile")} // Navigate back to Profile
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        {/* Archive Title */}
        <h1 className="text-3xl font-bold font-heading ml-4">Archive</h1>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex mb-8 justify-center">
          <button
            className="px-6 py-2 border-b-2 border-accent font-bold"
            disabled
          >
            Posts
          </button>
        </div>
      </div>

      {/* Recipe Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <RecipeGrid recipes={archivedRecipes} />
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500">
        2024 Uncharted Creatives. All rights reserved.
      </footer>
    </div>
    </>
  );
};

export default ArchivePage;
