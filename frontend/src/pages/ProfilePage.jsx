import { useState } from "react";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileActions from "../components/Profile/ProfileActions";
import ProfileTabs from "../components/Profile/ProfileTabs";
import RecipeGrid from "../components/Profile/RecipeGrid";
import MealPlanGrid from "../components/Profile/MealPlanGrid";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const profiles = [
    {
      id: 1,
      profilePicture: "https://via.placeholder.com/150",
      name: "Alniño Pastoriza",
      handle: "alphas12",
      bio: "A great chef is an artist that I truly respect.",
      stats: {
        posts: 6,
        followers: 160,
        following: 272,
      },
    },
  ];

  const recipes = [
    { id: 1, image: "https://via.placeholder.com/300", title: "Eggs Benedict" },
    { id: 2, image: "https://via.placeholder.com/300", title: "Banana Bread" },
    { id: 3, image: "https://via.placeholder.com/300", title: "Grilled Salmon" },
    { id: 4, image: "https://via.placeholder.com/300", title: "Deviled Eggs" },
    { id: 5, image: "https://via.placeholder.com/300", title: "Banana Muffins" },
    { id: 6, image: "https://via.placeholder.com/300", title: "Herb-Crusted Salmon" },
  ];

  const mealPlan = [
    {
      id: 1,
      day: "Monday",
      breakfast: 1,
      lunch: 2,
      dinner: 3,
    },
    {
      id: 2,
      day: "Tuesday",
      breakfast: 4,
      lunch: 5,
      dinner: 6,
    },
    {
      id: 3,
      day: "Wednesday",
      breakfast: 1,
      lunch: 2,
      dinner: 3,
    },
    {
      id: 4,
      day: "Thursday",
      breakfast: 4,
      lunch: 5,
      dinner: 6,
    },
    {
      id: 5,
      day: "Friday",
      breakfast: 1,
      lunch: 2,
      dinner: 3,
    },
    {
      id: 6,
      day: "Saturday",
      breakfast: 4,
      lunch: 5,
      dinner: 6,
    },
    {
      id: 7,
      day: "Sunday",
      breakfast: 1,
      lunch: 2,
      dinner: 3,
    },
  ];



  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 h-full flex-grow">
        {/* Profile Header */}
        <ProfileHeader
          profilePicture={profiles[0].profilePicture}
          name={profiles[0].name}
          handle={profiles[0].handle}
          bio={profiles[0].bio}
          stats={profiles[0].stats}
        />

        {/* Profile Actions */}
        <ProfileActions/>

        {/* Tabs */}
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Content based on active tab */}
        <div className="max-w-6xl mx-auto px-4 mt-6">
          {activeTab === "posts" && <RecipeGrid recipes={recipes} />}
          {activeTab !== "posts" && (
            <MealPlanGrid
              mealPlan={mealPlan} // Pass the mealPlan data here
              recipes={recipes}   // Pass the recipes data for meal links
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProfilePage;
