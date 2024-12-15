import { Link } from "react-router-dom";

const ProfileActions = () => {
  return (
    <div className="flex justify-center gap-4 mt-6">
      <Link to="/editprofile">
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
          Edit Profile
        </button>
      </Link>
      <Link to="/archive">
        <button className="px-4 py-2 bg-accent text-white rounded hover:bg-accent-dark">
          View Archive
        </button>
      </Link>
    </div>
  );
};

export default ProfileActions;