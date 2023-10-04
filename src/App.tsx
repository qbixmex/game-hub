import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';
import { GameGrid, GenreList, Navbar, PlatformSelector } from './components';
import { Genre } from './interfaces';

const App = () => {

  const [ selectedGenre, setSelectedGenre ] = useState<Genre|null>(null);

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
              selectGenre={setSelectedGenre}
              selectedGenreId={selectedGenre?.id}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </main>
  );

};

export default App;
