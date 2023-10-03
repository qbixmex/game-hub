import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from ".";
import GameCardSkeleton from "./GameCardSkeleton";
import { skeletons } from "../data/constants";

const GameGrid = () => {

  const { games, errorMessage, isLoading } = useGames();

  return (
    <main>
      <Text fontSize="3rem" textAlign="center">Games Hub</Text>

      { errorMessage && <Text color="red.400" fontSize="1.2rem">{errorMessage}</Text> }

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        padding="20px"
      >

        {isLoading && (skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton.id} />
        )))}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}

      </SimpleGrid>
    </main>
  );

};

export default GameGrid;