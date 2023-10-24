import { Fragment } from 'react';
import { Box, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GameCard, GameCardContainer, GameCardSkeleton, GameHeading } from '.';
import { skeletons } from '../data/constants';
import useGames from '../hooks/useGames';

const GameGrid = () => {

  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGames();

  if (error) {
    return (
      <Text color="red.400" fontSize="1.2rem" fontWeight="bold">
        {error.message}
      </Text>
    );
  }

  const totalFetchedGames = data?.pages.reduce((total, page) => {
    return total + page.results.length
  }, 0) ?? 0;

  return (
    <Box paddingX="20px">
      <GameHeading />

      <InfiniteScroll
        dataLength={totalFetchedGames}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
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
      </InfiniteScroll>
    </Box>
  );

};

export default GameGrid;