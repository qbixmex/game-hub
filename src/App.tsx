import { Flex, Grid, GridItem, Show  } from '@chakra-ui/react';
import { GameGrid, GenreList, Navbar, PlatformSelector, SortSelector } from './components';

const App = () => {

  return (
    <main>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
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
    </main>
  );

};

export default App;
