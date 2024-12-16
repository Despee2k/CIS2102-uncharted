const ProfileHeader = ({ name, handle, bio, stats }) => {
  return (
    <div className="text-center mt-6">
      <h1 className="text-2xl font-bold mt-4">{name}</h1>
      <p className="text-gray-500">@{handle}</p>
      <p className="text-gray-700 mt-2">{bio}</p>
      <div className="flex justify-center gap-8 mt-4">
        <div>
          <p className="text-lg font-bold">{stats.posts}</p>
          <p className="text-gray-500">Posts</p>
        </div>
        <div>
          <p className="text-lg font-bold">{stats.followers}</p>
          <p className="text-gray-500">Followers</p>
        </div>
        <div>
          <p className="text-lg font-bold">{stats.following}</p>
          <p className="text-gray-500">Following</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;