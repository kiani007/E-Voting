//services-userServices.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';
const token = localStorage.getItem('tokenX');

export const getUser = async (X) => {
  try {
    console.log({X});
    const response = await axios.get(`${API_URL}/user/get-user`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${X}` 
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export const updateUser = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/user/update`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
export const uploadUserProfilePic = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/upload-profile-pic`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${token}}`
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
 export const signup = async (data) => {
          try {
            const response = await axios.post(`${API_URL}/auth/signup`, data, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            return response.data;
          } catch (error) {
            console.log(error);
            return error;
          }
 }
        
export const loginUser = async (data) => {
          try {
            const response = await axios.post(`${API_URL}/auth/login`, data, {
              headers: {
                'Content-Type': 'application/json',
              },
            });
            return response.data;
          } catch (error) {
            console.log(error);
            return error;
          }
 }  