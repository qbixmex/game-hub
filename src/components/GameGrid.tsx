import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from ".";


const GameGrid = () => {

  const { games, errorMessage, loading } = useGames();

  return (
    <main>
      <Text fontSize="3rem">Games</Text>

      { errorMessage && <Text color="red.400" fontSize="1.2rem">{errorMessage}</Text> }

      { loading && (<Spinner color="blue.500" size="xl" />)}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding="20px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </main>
  );

};

export default GameGrid;