import { FC } from 'react';
import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../interfaces';

type Props = {
  gameQuery: GameQuery;
};

const GameHeading: FC<Props> = ({ gameQuery }) => {

  const TITLE = `${gameQuery.platform?.name ?? ''} ${gameQuery.genre?.name ?? ''} Games`.trimStart();

  return (
    <Heading as="h1" mb={5} size="3xl">{ TITLE }</Heading>
  );

};

export default GameHeading;
