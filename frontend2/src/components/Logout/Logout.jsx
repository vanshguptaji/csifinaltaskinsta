import React from 'react';
import axiosInstance from '../../axiosInstance';
import { toast } from 'sonner';

function Logout() {
  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post('/auth/logout');
      if (response.data.success) {
        // Clear JWT tokens from localStorage
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        
        toast.success('Logged out successfully!');
        // Redirect to login page or home page
        window.location.href = '/login'; // Redirect to login page
      } else {
        toast.error('Logout failed');
      }
    } catch (error) {
      toast.error('Error occurred while logging out.');
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
