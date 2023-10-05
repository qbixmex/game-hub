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
    <Card>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        alt={game.name}
      />
      <CardBody>
        <HStack
          alignItems="center"
          justifyContent="space-between"
          marginBottom={4}
        >
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );

};

export default GameCard;
