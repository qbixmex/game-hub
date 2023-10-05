/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosError, AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[],
) => {

  const [ data, setData ] = useState<T[]>([]);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient.get<FetchResponse<T>>(`/${endpoint}`, {
      signal: controller.signal,
      ...requestConfig,
    })
      .then((response) => {
        setData(response.data.results);
      })
      .catch((error: AxiosError) => {
        if (error.response?.status === 404) {
          setErrorMessage('The requested resource was not found on this server !');
        }
      })
      .finally(() => setIsLoading(false));

    return () => controller.abort();

  }, dependencies ? [...dependencies] : []);

  return {
    data,
    errorMessage,
    isLoading,
  };
};

export default useData;
