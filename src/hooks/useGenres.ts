import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

import { GenreResponse, Genre } from "../interfaces";

const useGenres = () => {

  const [ genres, setGenres ] = useState<Genre[]>([]);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const storage = localStorage.getItem('genres');

    if (!storage) {
      setIsLoading(true);
      apiClient.get<GenreResponse>('/genres', { signal: controller.signal })
        .then((response) => {
          const genreData = response.data.results;
          setGenres(genreData);
          localStorage.setItem('genres', JSON.stringify(genreData));
          setIsLoading(false);
        })
        .catch((error: AxiosError) => {
          if (error.response?.status === 404) {
            setErrorMessage('The requested resource was not found on this server !');
          }
          setIsLoading(false);
        })
    } else {
      setGenres(JSON.parse(storage as string));
    }
    return () => controller.abort();
  }, []);

  return {
    genres,
    errorMessage,
    isLoading,
  };
};

export default useGenres;
