import React from "react";
import { AiOutlineBell } from "react-icons/ai"; // Notification icon
import { FiSearch } from "react-icons/fi"; // Search icon

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-black px-6 py-4 border-b border-gray-800">
      <h1 className="text-7xl font-bold text-purple-400">hola'</h1>

      {/* Search Bar */}
      <div className="relative flex items-center w-1/3">
        <FiSearch className="absolute left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-purple-600"
        />
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <AiOutlineBell size={24} className="text-gray-400 cursor-pointer hover:text-white" />
        {/* Profile Avatar */}
        <div className="h-10 w-10 rounded-full bg-gray-600 cursor-pointer"></div>
      </div>
    </header>
  );
};

export default Header;
