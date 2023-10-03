import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const useData = <T>(endpoint: string) => {

  const [ data, setData ] = useState<T[]>([]);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const storage = localStorage.getItem(endpoint);

    if (!storage) {
      setIsLoading(true);
      apiClient.get<FetchResponse<T>>(`/${endpoint}`, { signal: controller.signal })
        .then((response) => {
          const dataResults = response.data.results;
          setData(dataResults);
          localStorage.setItem(endpoint, JSON.stringify(dataResults));
          setIsLoading(false);
        })
        .catch((error: AxiosError) => {
          if (error.response?.status === 404) {
            setErrorMessage('The requested resource was not found on this server !');
          }
          setIsLoading(false);
        })
    } else {
      setData(JSON.parse(storage as string));
    }
    return () => controller.abort();
  }, [endpoint]);

  return {
    data,
    errorMessage,
    isLoading,
  };
};

export default useData;
