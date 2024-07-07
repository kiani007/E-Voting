import { useState } from 'react';
import axios from 'axios';

const useApiCall = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (url, method = 'get', data = null) => {
    setLoading(true);
    setError(null);
    const baseUrl = "http://localhost:3000";
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
      };

      const options = {
        url: baseUrl + url,
        method,
        headers,
        data,
      };
      if (method === 'delete') {
          console.log("delete called",options.url);
          const response = await axios.delete(options.url,{
          headers: options.headers
        })
      }
      else {
        
        const response = await axios(options);
        setLoading(false);
        return response.data;
      }


    } catch (error) {
      setLoading(false);
      setError(error.message || 'Something went wrong.');
      throw error;
    }
  };

  return { isLoading, error, fetchData };
};

export default useApiCall;
