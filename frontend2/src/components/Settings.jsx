import React from "react";
import {
  AiOutlineSave,
  AiOutlineInbox,
  AiOutlineClose,
} from "react-icons/ai"; // For Saved and Archive icons
import { BiBlock, BiHelpCircle } from "react-icons/bi"; // For Blocked and Help icons
import { FaUserFriends } from "react-icons/fa"; // For Close Friends icon
import { MdOutlinePrivacyTip, MdLanguage } from "react-icons/md"; // For Privacy and Language icons
import { clearAuthUser } from "@/redux/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Settings = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      dispatch(clearAuthUser());
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="text-white h-full min-h-screen w-full flex justify-center items-center p-4">
      <div className="w-full sm:w-96 h-auto sm:h-auto p-6 rounded-lg bg-gray-800">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold">Settings</h1>
          {/* <button className="text-gray-400 hover:text-white text-xl">
            <AiOutlineClose />
          </button> */}
        </div>

        {/* Accounts Center */}
        <div className="mb-6 border-2 border-solid border-purple-600 rounded-md p-4 pb-4">
          <h2 className="text-sm font-semibold mb-2">Accounts Center</h2>
          <ul className="space-y-2">
            <li>
              <button className="text-sm text-gray-400 hover:text-white">
                Password and security
              </button>
            </li>
            <li>
              <button className="text-sm text-gray-400 hover:text-white">
                Personal details
              </button>
            </li>
          </ul>
          <button className="mt-3 text-blue-500 text-sm hover:underline">
            Add more accounts
          </button>
        </div>

        {/* Options */}
        <div className="mb-6">
          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <AiOutlineSave className="text-lg" />
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Saved
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <AiOutlineInbox className="text-lg" />
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Archive
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaUserFriends className="text-lg" />
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Close friends
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <BiBlock className="text-lg" />
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Blocked
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <MdOutlinePrivacyTip className="text-lg" />
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Account privacy
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <MdLanguage className="text-lg" />
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Language
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <BiHelpCircle className="text-lg" />
              <span className="text-sm text-gray-400 hover:text-white cursor-pointer">
                Help
              </span>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div>
          <button className="block text-sm text-blue-500 hover:underline mb-2">
            Add account
          </button>
          <button className="block text-sm text-red-500 hover:underline mb-2" onClick={logoutHandler}>
            Log out
          </button>
          <button className="block text-sm text-red-500 hover:underline">
            Log out all accounts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
