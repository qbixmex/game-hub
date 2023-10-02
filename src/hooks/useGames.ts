import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

import { Games, Game } from "../interfaces";

const useGames = () => {

  const [ loading, setLoading ] = useState(false);
  const [ games, setGames ] = useState<Game[]>([]);
  const [ errorMessage, setErrorMessage ] = useState('');
  const [ mounted, setMounted ] = useState(false);

  useEffect(() => {
    
    if (mounted) {
      const controller = new AbortController();
      const storage = localStorage.getItem('games');
      if (!storage) {
        setLoading(true);
        apiClient.get<Games>('/games', { signal: controller.signal })
          .then((response) => {
            const gameData = response.data.results;
            setGames(gameData);
            localStorage.setItem('games', JSON.stringify(gameData));
          })
          .catch((error: AxiosError) => {
            if (error.response?.status === 404) {
              setErrorMessage('The requested resource was not found on this server !');
            }
          })
          .finally(() => setLoading(false));
      } else {
        setGames(JSON.parse(storage as string));
      }
    }
    return () => setMounted(true);
  }, [mounted]);

  return {
    games,
    errorMessage,
    loading,
  };
};

export default useGames;
