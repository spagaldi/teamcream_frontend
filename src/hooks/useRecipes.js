import { useEffect, useState } from 'react';
import axiosWithToken from '../api/axiosWithToken';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm) => {
    try {
      const response = await axiosWithToken.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'san diego',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('sushi');
  }, []);

  return [searchApi, results, errorMessage];
};
