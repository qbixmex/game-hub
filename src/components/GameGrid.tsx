import { FC } from 'react';
import { SimpleGrid, Text } from '@chakra-ui/react';
import { GameCard, GameCardContainer, GameCardSkeleton, GameHeading } from '.';
import { skeletons } from '../data/constants';
import useGames from '../hooks/useGames';
import { GameQuery } from '../interfaces';

type Props = {
  gameQuery: GameQuery
};

const GameGrid: FC<Props> = ({ gameQuery }) => {

  const { data, errorMessage, isLoading } = useGames(gameQuery);

  if (errorMessage) {
    return (
      <Text color="red.400" fontSize="1.2rem">
        {errorMessage}
      </Text>
    );
  }

  return (
    <main>
      <GameHeading gameQuery={gameQuery} />

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

        {!isLoading && data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </main>
  );

};

export default GameGrid;