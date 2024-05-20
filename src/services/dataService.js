//services-userServices.js
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const getUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/get-user`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
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
    const response = await axios.post(`${API_URL}/update`, data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${localStorage.getItem('token')}`
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
        'Authorization': `${localStorage.getItem('token')}`
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
            const response = await fetch('http://localhost:3000/auth/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            
          } catch (error) {
            console.log(error);
            return error;
          }
 }
        
export const loginUser = async (data) => {
          try {
            const response = await fetch('http://localhost:3000/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            
          } catch (error) {
            console.log(error);
            return error;
          }
 }  