import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { MdEdit } from "react-icons/md";
import Header from './Header';
import Sidebar from './LeftSidebar';
import RightPanel from './RightPanel';

function SearchProfile() {
  const location = useLocation(); // Access the location object
  const { user } = location.state || {}; // Retrieve the user from state
  const [isFollowing, setIsFollowing] = useState(false); // State to manage follow status

  // Check if the current user is following the profile
  useEffect(() => {
    if (user) {
      // Assume a function `checkFollowingStatus` exists that checks if the user is following the profile
      checkFollowingStatus(user.id);
    }
  }, [user]);

  const checkFollowingStatus = async (userId) => {
    try {
      const response = await axios.get(`https://hola-project.onrender.com/api/accounts/follow/${userId}/`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        }
      });
      setIsFollowing(response.data.is_following); // Set the follow status based on the response
    } catch (error) {
      console.error('Error checking follow status:', error);
    }
  };

  // Handle follow/unfollow action
  const handleFollow = async (userId) => {
    try {
      const response = await axios.post(`https://hola-project.onrender.com/api/accounts/follow/${userId}/`, {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        }
      });
      console.log('Follow API Response:', response.data); // Log the response from the API

      // Toggle the follow status based on the response
      setIsFollowing(response.data.is_following);
    } catch (error) {
      console.error('Error following/unfollowing user:', error);
    }
  };

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-black text-white overflow-x-hidden">
      <Header />
      <div className="w-screen flex flex-grow bg-black">
        <Sidebar />
        <div className="flex-grow p-4">
          <main className="flex-1">
            <div className="flex flex-col items-center bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg">
              <div className="relative w-full h-40 sm:h-48">
                <img
                  src={user.background_photo ? user.background_photo : "https://via.placeholder.com/900x300"}
                  alt="Background"
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="relative -mt-12 w-24 h-24 sm:w-28 sm:h-28 mx-auto">
                <img
                  src={user.profile_photo ? user.profile_photo : "https://via.placeholder.com/150"}
                  alt="Profile"
                  className="rounded-full border-4 border-gray-800"
                />
              </div>

              <div className="p-4">
                <div className="flex flex-col md:flex-row md:space-x-8">
                  <div className="p-4 text-left flex-1">
                    <div className="flex flex-col">
                      <h1 className="text-xl sm:text-xl font-bold">{user.username || "No username available"}</h1>
                      <p className="text-sm text-gray-400 mt-2">{user?.bio || "No bio available"}</p>
                      <p className="text-sm text-gray-500 mt-1">📍 Ghaziabad (201206), U.P.</p>
                    </div>
                  </div>

                  <div className="w-full flex-1 p-4">
                    <div className="flex justify-end space-x-4 text-xl mb-4">
                      <FaInstagram className="text-pink-400 hover:text-purple-300 cursor-pointer" />
                      <FaFacebook className="text-blue-400 hover:text-blue-300 cursor-pointer" />
                      <FaEnvelope className="text-blue-400 hover:text-gray-300 cursor-pointer" />
                      <MdEdit className="text-gray-400 hover:text-gray-300 cursor-pointer" />
                    </div>
                    <div className="mt-5 grid grid-cols-1 xl:grid-cols-3 gap-4 border-t border-gray-700">
                      <div className="text-center">
                        <h3 className="font-bold text-lg">{user?.num_posts}</h3>
                        <p className="text-gray-500">Posts</p>
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-lg">{user?.num_followers}</h3>
                        <p className="text-gray-500">Followers</p>
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-lg">{user?.num_following}</h3>
                        <p className="text-gray-500">Following</p>
                      </div>
                    </div>

                    {/* Follow/Unfollow Button */}
                    <button
                      className={`w-full flex justify-center text-xl text-center p-2 rounded-md mt-2 ${isFollowing ? 'bg-red-600' : 'bg-purple-600'}`}
                      onClick={() => handleFollow(user.id)}
                    >
                      {isFollowing ? 'Unfollow' : 'Follow'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <RightPanel />
      </div>
    </div>
  );
}

export default SearchProfile;
