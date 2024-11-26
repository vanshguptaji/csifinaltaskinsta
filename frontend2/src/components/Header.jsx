import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai"; 
import { FiSearch } from "react-icons/fi"; 
import { setAuthUser } from '@/redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { toast } from 'sonner';
import { Link } from "react-router-dom";
import Notifications from "./Notification";

const Header = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleNotificationModal = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  const fetchUsers = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(`http://hola-project.onrender.com/api/accounts/search/?q=${query}`);
      console.log(response); // Debug API response
      setSearchResults(response.data || []); // Ensure results are an array
    } catch (error) {
      console.error("Error fetching users:", error);
      setSearchResults([]); // Fallback to an empty array
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim()) {
      fetchUsers(query);
    } else {
      setSearchResults([]); // Clear results when input is empty
    }
  };

  return (
    <header className="flex items-center justify-between bg-black px-6 py-4 border-b border-gray-800">
      <h1 className="text-7xl font-bold text-purple-400">hola'</h1>

      {/* Search Bar */}
      <div className="relative flex flex-col items-start w-1/3">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search"
            className="w-full pl-10 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-purple-600"
          />
        </div>

        {/* Search Results Dropdown */}
        {searchQuery.trim() && (
          <div className="absolute z-10 w-full mt-20 bg-gray-900 rounded-lg shadow-lg">
            {loading ? (
              <p className="text-center text-gray-400 p-4">Loading...</p>
            ) : Array.isArray(searchResults) && searchResults.length > 0 ? (
              searchResults.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer"
                >
                  <div className="h-8 w-8 rounded-full bg-gray-600">
                    <img
                      src={user.avatar || ""}
                      alt="User Avatar"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-white">{user.full_name || "Unnamed User"}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 p-4">No users found.</p>
            )}
          </div>
        )}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button
          onClick={toggleNotificationModal}
          className="flex items-center gap-3 text-lg"
        >
          <AiOutlineBell size={24} />
        </button>
        {/* Profile Avatar */}
        <Link to="/profile">
          <div className="h-16 w-16 rounded-full bg-[url('images/rickandmorty3.jpg')] bg-cover cursor-pointer"></div>
        </Link>
      </div>

      {/* Notification Modal */}
      {isNotificationOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-2/4 h-auto bg-gray-800 rounded-lg p-6 text-center shadow-lg">
            <button
              onClick={toggleNotificationModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <Notifications />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

