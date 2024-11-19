import axios from 'axios';

// Create Axios instance
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Replace with your backend base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add Authorization header with access token if present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
