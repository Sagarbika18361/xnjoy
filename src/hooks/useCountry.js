import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useCountry = () => {
  const [country, setCountry] = useState('');
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        setCountry(response?.data);
      } catch (error) {
        console.error('Error fetching the country data:', error);
      }
    };

    fetchCountry();
  }, []);

  return country;
}

export default useCountry;


