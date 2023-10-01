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
          <GridItem area="aside" bg="orange.500" color="gray.800">
            Aside Goes Here
          </GridItem>
        </Show>
        <GridItem area="main" bg="gray.600" color="white">
          Main Content Goes Here
        </GridItem>
      </Grid>
    </main>
  );
};

export default App;
