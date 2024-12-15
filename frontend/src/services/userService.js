import axios from 'axios';

const API_BASE_URL = 'http://localhost:8088/api/auth';

export const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_BASE_URL}/me`, {
      headers: {
        'Authorization': token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user profile', error);
    throw error;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const token = localStorage.getItem('token'); // Get token from localStorage
    const response = await axios.put(`${API_BASE_URL}/update-profile`, userData, {
      headers: {
        'Authorization': token
      }
    });
    return response.data;
  } catch (error) {
    console.error('Failed to update user profile', error);
    throw error;
  }
};
