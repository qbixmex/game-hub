import { Flex, Grid, GridItem, Show  } from '@chakra-ui/react';
import { GameGrid, GenreList, PlatformSelector, SortSelector } from '../components';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex marginLeft={4} mb={5} gap={4}>
          <PlatformSelector />
          <SortSelector />
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
