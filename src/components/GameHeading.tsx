import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../interfaces';
import usePlatform from '../hooks/usePlatform';
import useGenre from '../hooks/useGenre';

type Props = {
  gameQuery: GameQuery;
};

const GameHeading: FC<Props> = ({ gameQuery }) => {

  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatform(gameQuery.platformId);

  const TITLE = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`.trimStart();

  return (
    <Heading as="h1" mb={5} size="3xl">{ TITLE }</Heading>
  );

};

export default GameHeading;
