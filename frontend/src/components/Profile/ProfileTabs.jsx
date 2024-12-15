const ProfileTabs = ({ activeTab, setActiveTab }) => {
    return (
      <div className="flex justify-center mt-6">
        <button
          className={`px-6 py-2 ${
            activeTab === "posts" ? "border-b-4 border-accent font-bold" : ""
          }`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
        <button
          className={`px-6 py-2 ${
            activeTab === "mealPlan" ? "border-b-4 border-accent font-bold" : ""
          }`}
          onClick={() => setActiveTab("mealPlan")}
        >
          Meal Plan
        </button>
      </div>
    );
  };
  
  export default ProfileTabs;
  