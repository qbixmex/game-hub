import { FC } from 'react';
import { Game } from '../interfaces';
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { CriticScore, PlatformIconList } from '.';
import getCroppedImageUrl from '../services/image-url';

type Props = {
  game: Game;
};

const GameCard: FC<Props> = ({ game }) => {

  return (
    <Card borderRadius={10} overflow="hidden">
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between" alignItems="center" marginY={2}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );

};

export default GameCard;
