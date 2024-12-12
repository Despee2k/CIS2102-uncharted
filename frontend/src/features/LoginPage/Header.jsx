
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-4">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="../../src/assets/Logo2.png"
          alt="Logo"
          className="h-12 w-12 mr-4"
        />
        <Link to="/">
          <span className="text-2xl font-semibold text-black font-heading">
            Uncharted <span className="text-accent">Creatives</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;