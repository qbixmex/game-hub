import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard, GameCardContainer, GameCardSkeleton } from ".";
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
          <GameCardContainer key={skeleton.id}>
            <GameCardSkeleton />
          </GameCardContainer>
        )))}

          {games.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))}
      </SimpleGrid>
    </main>
  );

};

export default GameGrid;