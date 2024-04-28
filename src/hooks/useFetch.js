import { useEffect, useState } from 'react';

export default function useFetch(fetchFn, initialValue) {
    const [fetchedData, setFetchedData] = useState(initialValue);
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();

    useEffect(() => {
      async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setFetchedData(places);
          } catch (error) {
            setError(error);
          }
    
          setIsFetching(false);
      }
    
      fetchData();
    }, []);

    // To expose the state variables and functions to the components using this hook
    return {
      fetchedData,
      isFetching,
      setFetchedData,
      error
    };
}