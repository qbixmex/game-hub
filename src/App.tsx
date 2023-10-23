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
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Navbar onSearch={(searchTerm) => {
            setGameQuery({ ...gameQuery, searchText: searchTerm })}
          } />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList
              selectedGenreId={ gameQuery.genreId }
              selectGenre={genre => {
                setGameQuery({ ...gameQuery, genreId: genre.id })}
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex marginLeft={4} mb={5} gap={4}>
            <PlatformSelector
              selectedPlatformId={ gameQuery.platformId }
              onSelectedPlatform={(platform) => {
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }}
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
