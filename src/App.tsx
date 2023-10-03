import { Grid, GridItem, Show } from '@chakra-ui/react';
import { GameGrid, GenreList, Navbar } from './components';

const App = () => {
  return (
    <main>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
        <GridItem area="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </main>
  );
};

export default App;
