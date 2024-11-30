import useGetHomepage from "@/hooks/useGetHomepage";
import React, { useState, useEffect } from "react";
import axios from 'axios';

const RightPanel = () => {

  const {rightbar, fetchRighbar} = useGetHomepage
  const [liveUsers, setLiveUsers] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [showFullList, setShowFullList] = useState(false);
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://hola-project.onrender.com/api/accounts/homepage/', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
          }
        });
        console.log('API Response:', response.data); // Log the response from the API
        // setLiveUsers(response.data.right_bar.slice(0, 5)); // Show only 5 users
        setSuggestedUsers(response.data.right_bar); // Set suggested users
        console.log(suggestedUsers);
        
      } catch (error) {
        console.error('Error fetching users:', error);
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request data:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
      }
    };

    fetchUsers();
  }, []);

  const handleFollow = async (userId) => {
    try {
      const response = await axios.post(`https://hola-project.onrender.com/api/accounts/follow/${userId}/`, {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('accesstoken')}`
        }
      });
      console.log('Follow API Response:', response.data); // Log the response from the API
      if (response.data.is_following) {
        setSuggestedUsers(suggestedUsers.filter(user => user.id !== userId));
      }
    } catch (error) {
      console.error('Error following user:', error);
    }
  };

  const displayedUsers = showFullList ? suggestedUsers : suggestedUsers.slice(0, 7);

  return (
    <div className="hidden md:block lg:w-1/4 md:min-w-max bg-black h-full p-4 mr-16">
      <button className="bg-goliveGray text-black rounded-lg py-2 px-4 mb-6 w-full font-bold ">
        GO LIVE
      </button>

      <div className="bg-black border-2 border-solid border-[#F8BD00] text-white p-4 rounded-lg shadow-md mb-4">
        <div className="flex items-center mb-3">
          <div className="text-yellow-500 text-2xl mr-3">⭐</div>
          <p className="text-gray-400">Grow professionally with Premium</p>
        </div>
        <p className="text-lg font-semibold text-white">Try 1 month for $0</p>
      </div>

      <div className="border-4 border-solid border-purple-600 rounded-md p-4 mb-10">
        <h3 className="text-xl font-semibold mb-4">Live</h3>
        <div className="flex space-x-3 mb-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center space-y-3">
              <div className="h-14 w-14 rounded-full bg-[url('images/rickandmorty3.jpg')] bg-cover"></div>
              <div>@User</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-2 border-solid p-2 rounded-md">
        <h3 className="text-xl font-semibold mb-4">Add friends</h3>
        <ul className="space-y-3">
        {displayedUsers.map(user => (
            <li key={user.id} className='flex items-center justify-between bg-sidebarGray p-3 mb-4 rounded-lg'>
              {user.profilePicture ? (
                <img src={user.profilePicture} alt={user.username} className='w-16 h-16 rounded-full mr-4 cursor-pointer' />
              ) : (
                <div className='w-10 h-10 rounded-full bg-gray-500 flex items-center justify-center mr-4'>
                  <span className='text-white font-semibold'>{user.username[0]}</span>
                </div>
              )}
              <span className='text-white font-semibold'>{user.username}</span>
              <button
                className='bg-purple-600 py-1 px-3 rounded-lg text-sm hover:bg-purple-500'
                onClick={() => handleFollow(user.id)}
              >
                Follow
              </button>
            </li>
          ))}
        </ul>
        {suggestedUsers.length > 7 && (
          <button
            className='text-purple-600 hover:underline'
            onClick={() => setShowFullList(!showFullList)}
          >
            {showFullList ? 'Show Less' : 'See More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default RightPanel;
