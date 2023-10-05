import { useState } from 'react';
import { Flex, Grid, GridItem, Show  } from '@chakra-ui/react';
import { GameGrid, GenreList, Navbar, PlatformSelector, SortSelector } from './components';
import { GameQuery } from './interfaces';

const App = () => {
  const [ gameQuery, setGameQuery ] = useState<GameQuery>({} as GameQuery);

  return (
    <main>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "300px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenreId={ gameQuery.genre?.id }
              selectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex marginLeft={4} mb={5} gap={4}>
            <PlatformSelector
              selectedPlatform={ gameQuery.platform }
              onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            />
          </Flex>
          <GameGrid gameQuery={ gameQuery} />
        </GridItem>
      </Grid>
    </main>
  );

};

export default App;
