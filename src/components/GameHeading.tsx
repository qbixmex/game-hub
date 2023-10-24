import { Heading } from '@chakra-ui/react';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';
import useGameQueryStore from '../store';

const GameHeading = () => {

  const genreId = useGameQueryStore(selector => selector.gameQuery.genreId);
  const genre = useGenre(genreId)

  const platformId = useGameQueryStore(selector => selector.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const TITLE = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`.trimStart();

  return (
    <Heading as="h1" mb={5} size="3xl">{ TITLE }</Heading>
  );

};

export default GameHeading;
