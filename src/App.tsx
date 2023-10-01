import { Grid, GridItem, Show } from '@chakra-ui/react';
import { Navbar } from './components';

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
          Main Content Goes Here
        </GridItem>
      </Grid>
    </main>
  );
};

export default App;
