import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

import { Games, Game } from "../interfaces";

const useGames = () => {

  const [ isLoading, setIsLoading ] = useState(false);
  const [ games, setGames ] = useState<Game[]>([]);
  const [ errorMessage, setErrorMessage ] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const storage = localStorage.getItem('games');

    if (!storage) {
      setIsLoading(true);
      apiClient.get<Games>('/games', { signal: controller.signal })
        .then((response) => {
          const gameData = response.data.results;
          setGames(gameData);
          localStorage.setItem('games', JSON.stringify(gameData));
          setIsLoading(false);
        })
        .catch((error: AxiosError) => {
          if (error.response?.status === 404) {
            setErrorMessage('The requested resource was not found on this server !');
          }
          setIsLoading(false);
        })
    } else {
      setGames(JSON.parse(storage as string));
    }
  }, []);

  return {
    games,
    errorMessage,
    isLoading,
  };
};

export default useGames;
