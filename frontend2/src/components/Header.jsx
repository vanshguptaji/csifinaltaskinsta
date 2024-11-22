import React, { useState } from "react";
import { AiOutlineBell } from "react-icons/ai"; 
import { FiSearch } from "react-icons/fi"; 
import { setAuthUser } from '@/redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { toast } from 'sonner'
import { Link } from "react-router-dom";
import Notifications from "./Notification";

const Header = () => {

  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const toggleNotificationModal = () => {
    setIsNotificationOpen((prev) => !prev);
  };

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
        <button
            onClick={toggleNotificationModal}
            className="flex items-center gap-3 text-lg"
          >
            <AiOutlineBell size={24} />
          </button>
        {/* Profile Avatar */}
        <Link to="/profile">
        <div className="h-16 w-16 rounded-full bg-[url('../../images/rickandmorty3.jpg')] bg-cover cursor-pointer"></div>
        </Link>
        {/* <p>@{user.full_name}</p> */}
      </div>
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
