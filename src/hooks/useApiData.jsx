import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useApiData(url, initData = []) {
  const [data, setData] = useState(initData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({});
  const [restartData, setRestartData] = useState(false);

  // const reFetch = () => setRestartData(!restartData);

  function reFetch() {
    setRestartData(!restartData);
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((resp) => {
        console.log('resp ===', resp);
        // const prodArr = resp.data
        setData(resp.data);
      })
      .catch((error) => {
        console.warn('ivyko klaida:', error);
        setIsError(error.response);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url, restartData]);

  return [data, setData, isLoading, isError, reFetch];
}
