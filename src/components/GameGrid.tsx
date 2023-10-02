import { Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";


const GameGrid = () => {

  const { games, errorMessage, loading } = useGames();

  return (
    <main style={{ textAlign: 'center' }}>
      <Text fontSize="3rem">Games</Text>

      { errorMessage && <Text color="red.400" fontSize="1.2rem">{errorMessage}</Text> }

      { loading && (<Spinner color="blue.500" size="xl" />)}

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