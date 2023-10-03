import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameCard, GameCardContainer, GameCardSkeleton } from ".";
import { skeletons } from "../data/constants";
import useGames from "../hooks/useGames";

const GameGrid = () => {

  const {
    data: games,
    errorMessage,
    isLoading
  } = useGames();

  return (
    <main>
      { errorMessage && <Text color="red.400" fontSize="1.2rem">{errorMessage}</Text> }

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        paddingX="20px"
      >
        {isLoading && (skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton.id}>
            <GameCardSkeleton />
          </GameCardContainer>
        )))}

        {!isLoading && games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </main>
  );

};

export default GameGrid;