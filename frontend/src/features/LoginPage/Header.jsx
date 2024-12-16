const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-4">
      {/* Static Logo */}
      <div className="flex items-center">
        <img
          src="../../src/assets/Logo2.png" // Ensure this path is correct
          alt="Logo"
          className="h-12 w-12 mr-4"
        />
        <span className="text-2xl font-semibold text-black font-heading">
          Uncharted <span className="text-accent">Creatives</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
