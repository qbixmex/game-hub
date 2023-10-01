import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError } from "axios";

import { Games, Game } from "../interfaces";

const GameGrid = () => {

  const [ games, setGames ] = useState<Game[]>([]);
  const [ errorMessage, setErrorMessage ] = useState('');
  // TODO: const [ loading, setLoading ] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    if (!localStorage.getItem('games')) {
      apiClient.get<Games>('/games', { signal: controller.signal })
        .then(({data: { results: games }}) => {
          localStorage.setItem('games', JSON.stringify(games));
          setGames(games);
        })
        .catch((error: AxiosError) => {
          if (error.response?.status === 404) {
            setErrorMessage('The requested resource was not found on this server !');
          }
        });
    } else {
      const games = JSON.parse(localStorage.getItem('games') as string);
      setGames(games);
    }
    return () => controller.abort();
  }, []);

  return (
    <main style={{ textAlign: 'center' }}>
      <Text fontSize="3rem">Games</Text>
      { errorMessage && <Text color="red.400" fontSize="1.2rem">{errorMessage}</Text> }
      <ul style={{ textAlign: 'left', marginLeft: '3rem' }}>
        {games.map((game) => (
          <li key={game.id}>
            {game.id} - {game.name}
          </li>
        ))}
      </ul>
    </main>
  );

};

export default GameGrid;