import { Grid, GridItem, Show } from '@chakra-ui/react';
import { GameGrid, Navbar } from './components';

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
            Aside Goes Here
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
