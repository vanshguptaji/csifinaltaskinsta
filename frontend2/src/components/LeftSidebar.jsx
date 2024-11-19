import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineBell,
  AiOutlineMessage,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCompass } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import lineiconsPhoto from "../../images/lineicons_photos.png";

const Sidebar = () => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const toggleCreateModal = () => {
    setIsCreateOpen((prev) => !prev);
    setSelectedFile(null); // Reset file on modal close
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log("Selected file:", file);
  };

  return (
    <>
      <div className="w-1/5 min-w-max bg-sidebarGray h-full flex flex-col items-center py-6">
        <nav className="space-y-6">
          <Link to="/mainHome" className="flex items-center gap-3 text-lg">
            <AiOutlineHome size={24} />
            Home
          </Link>
          <Link to="/chatbox" className="flex items-center gap-3 text-lg">
            <AiOutlineMessage size={24} />
            Messages
          </Link>
          <a href="/mainHome" className="flex items-center gap-3 text-lg">
            <BsCompass size={24} />
            Explore
          </a>
          <button
            onClick={toggleCreateModal}
            className="flex items-center gap-3 text-lg"
          >
            <FiPlusSquare size={24} />
            Create
          </button>
          <a href="/" className="flex items-center gap-3 text-lg">
            <AiOutlineBell size={24} />
            Notifications
          </a>
        </nav>
      </div>

      {/* Modal for Create Section */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative w-3/4 bg-gray-800 rounded-lg p-6 text-center shadow-lg">
            <button
              onClick={toggleCreateModal}
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

            {selectedFile ? (
              // Render designed post interface when a file is selected
              <>
                <h2 className="text-lg font-medium text-gray-300 mb-4">
                  Create post
                </h2>
                <div className="border-2 border-dashed rounded-md p-4">
                  <div className="flex gap-6">
                    {/* Uploaded Image Preview */}
                    <div className="w-1/2">
                      <img
                        src={URL.createObjectURL(selectedFile)}
                        alt="Selected file"
                        className="w-full h-auto object-contain rounded-lg"
                      />
                    </div>

                    {/* Input Fields */}
                    <div className="w-1/2 space-y-4">
                      <textarea
                        placeholder="Add caption......"
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md outline-none resize-none"
                        rows="3"
                      ></textarea>
                      <textarea
                        placeholder="Add your hashtags #......"
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md outline-none resize-none"
                        rows="2"
                      ></textarea>
                      <input
                        type="text"
                        placeholder="Add location"
                        className="w-full p-2 bg-gray-700 text-gray-200 rounded-md outline-none"
                      />
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Hide view counts</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            {/* The 'peer' class should be on the checkbox input */}
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
                          </label>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Hide like counts</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            {/* The 'peer' class should be on the checkbox input */}
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 rounded-full peer-checked:bg-purple-500 transition-colors"></div>
                          </label>
                        </div>
                      </div>

                      <button className="w-full py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-md">
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // File selection UI
              <>
                <h2 className="text-lg font-medium text-gray-300 mb-8">
                  Create post
                </h2>
                <div className="flex flex-col items-center justify-center h-2/3 border-2 border-dashed border-gray-500 rounded-lg p-6">
                  <div className="w-full h-48 flex justify-center items-center border-dashed border-2 border-gray-500 rounded-lg overflow-hidden">
                    <img
                      src={lineiconsPhoto} // Default image
                      alt="Default"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-gray-400 mb-4 mt-4">
                    Drag and drop your photos here
                  </p>
                  <label className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-500 cursor-pointer">
                    Select from device
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
