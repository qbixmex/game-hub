import { FC } from 'react';
import { Game } from '../interfaces';
import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { PlatformIconList } from '.';

type Props = {
  game: Game;
};

const GameCard: FC<Props> = ({ game }) => {

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} alt={game.name} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map(p => p.platform)}
        />
      </CardBody>
    </Card>
  );

};

export default GameCard;
