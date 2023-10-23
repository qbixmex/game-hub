import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../interfaces';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

type Props = {
  gameQuery: GameQuery;
};

const GameHeading: FC<Props> = ({ gameQuery }) => {

  const { data: genres } = useGenres();
  const genre = genres?.results.find(g => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(p => p.id === gameQuery.platformId);

  const TITLE = `${platform?.name ?? ''} ${genre?.name ?? ''} Games`.trimStart();

  return (
    <Heading as="h1" mb={5} size="3xl">{ TITLE }</Heading>
  );

};

export default GameHeading;
