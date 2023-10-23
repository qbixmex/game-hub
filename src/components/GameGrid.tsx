import { FC, Fragment } from 'react';
import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import { GameCard, GameCardContainer, GameCardSkeleton, GameHeading } from '.';
import { skeletons } from '../data/constants';
import useGames from '../hooks/useGames';
import { GameQuery } from '../interfaces';

type Props = {
  gameQuery: GameQuery
};

const GameGrid: FC<Props> = ({ gameQuery }) => {

  const {
    data, error, isLoading,
    isFetchingNextPage, fetchNextPage, hasNextPage
  } = useGames(gameQuery);

  if (error) {
    return (
      <Text color="red.400" fontSize="1.2rem" fontWeight="bold">
        {error.message}
      </Text>
    );
  }

  return (
    <Box paddingX="20px">
      <GameHeading gameQuery={gameQuery} />

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={5}
        mb={5}
      >
        {isLoading && (skeletons.map((skeleton) => (
          <GameCardContainer key={skeleton.id}>
            <GameCardSkeleton />
          </GameCardContainer>
        )))}

        {
          !isLoading && data?.pages.map((page, index) => (
            <Fragment key={index}>
              { page.results.map(game => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </Fragment>
          ))
        }
      </SimpleGrid>

      { hasNextPage && (
        <Button
          mb={5}
          onClick={ () => fetchNextPage() }
        >
          { isFetchingNextPage ? 'Loading ...' : 'Load More'}
        </Button>
      )}
    </Box>
  );

};

export default GameGrid;