import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdDashboard } from "react-icons/md";
import { FiClock, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = useMemo(
    () => [
      { name: "Dashboard", icon: <MdDashboard />, path: "/admindashboard" },
      { name: "Pending", icon: <FiClock />, path: "/pendingrequests" },
    ],
    []
  );

  const handleItemClick = (name, path) => {
    setActiveItem(name);
    navigate(path);
  };

  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = menuItems.find((item) => item.path === currentPath);
    if (currentItem) {
      setActiveItem(currentItem.name);
    }
  }, [location, menuItems]);

  return (
    <div className="w-64 h-screen bg-[#FDF9F3] flex flex-col justify-between shadow-md">
      <div className="p-6 text-center">
        <img src="../../src/assets/Logo1.png" alt="Logo" className="w-16 h-16 mx-auto mb-4" />
        <div className="text-2xl font-bold text-[#000] mb-2">Uncharted</div>
        <div className="text-lg font-semibold text-[#A87B64]">Creatives</div>
      </div>

      <ul className="flex-1">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`flex items-center p-4 cursor-pointer transition-all ${
              activeItem === item.name
                ? "bg-[#E9E4DF] border-l-4 border-[#A87B64]"
                : "hover:bg-gray-100 hover:text-black"
            }`}
            onClick={() => handleItemClick(item.name, item.path)}
          >
            <span className={`mr-4 text-xl ${activeItem === item.name ? "text-[#000]" : "text-[#555]"}`}>
              {item.icon}
            </span>
            <span className={`text-lg font-semibold ${activeItem === item.name ? "text-[#000]" : "text-[#555]"}`}>
              {item.name}
            </span>
          </li>
        ))}
      </ul>

      <div
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
        className="p-6 flex items-center justify-center text-gray-600 cursor-pointer hover:bg-gray-100 hover:text-black transition-all duration-300"
      >
        <FiLogOut className="mr-2 text-xl" />
        <span>Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;

