import React, { useState, useEffect } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { Link, Navigate, useNavigate } from "react-router-dom";
import Notifications from "./Notification";
import searchProfile from "./SearchProfile";
import rickandmorty from "../images/rickandmorty3.webp"

const Header = () => {
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  const toggleNotificationModal = () => {
    setIsNotificationOpen((prev) => !prev);
  };

  // Debounce effect to update debouncedQuery after typing
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer); 
  }, [searchQuery]);

  useEffect(() => {
    if (debouncedQuery.length >= 3) {
      fetchUsers(debouncedQuery);
    } else {
      setSearchResults([]); // Clear search results if query is less than 3 chars
    }
  }, [debouncedQuery]);

  const fetchUsers = async (query) => {
    try {
      setLoading(true);
      console.log("Fetching data for query:", query); 
      const response = await axios.get(`https://hola-project.onrender.com/api/accounts/search/?q=${query}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        }
      });
      console.log("Search response:", response.data); 
      setSearchResults(response.data.results || []); 
    } catch (error) {
      console.error("Error fetching users:", error);
      setSearchResults([]); 
    } finally {
      setLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleUserClick = (user) => {
    // navigate(`/user-profile/${user.id}`, { state: { userProfile: user } });
    setSearchResults([]); 
    setSearchQuery('');
    console.log(user);
    navigate('/searchProfile', { state: { user } });  };

  return (
    <header className="flex flex-col sm:flex-row items-center justify-between bg-black px-6 py-4 border-b border-gray-800">
      {/* Logo */}
      <Link to="/mainHome">
        <h1 className="text-4xl sm:text-7xl font-bold text-purple-400 mb-4 sm:mb-0">hola'</h1>
      </Link>

      {/* Search Bar */}
      <div className="relative flex flex-col items-start w-full sm:w-1/3 mb-4 sm:mb-0">
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 py-2 rounded-full bg-gray-800 text-white focus:outline-none focus:ring focus:ring-purple-600"
          />
        </div>

        {/* Search Results Dropdown */}
        {searchQuery.trim() && (
          <div className="absolute top-12 left-0 w-full bg-sidebarGray text-black rounded-lg shadow-lg z-10">
            {loading ? (
              <p className="text-center text-gray-400 p-4">Loading...</p>
            ) : searchResults.length > 0 ? (
              searchResults.map((user, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 hover:bg-gray-700 cursor-pointer"
                  onClick={() => handleUserClick(user)}
                >
                  <div className="h-8 w-8 rounded-full bg-gray-600">
                    <img
                      src={user.profile_photo || rickandmorty}
                      alt="User Avatar"
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-white">{user.username || "Unnamed User"}</p>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400 p-4">No users found.</p>
            )}
          </div>
        )}
      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 md:flex hidden">
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
