import { FC } from 'react';
import { Game } from '../interfaces';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';

type Props = {
  game: Game;
};

const Name: FC<Props> = ({ game }) => {

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );

};

export default Name;
