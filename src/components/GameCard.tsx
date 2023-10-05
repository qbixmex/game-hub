import { FC } from 'react';
import { Game } from '../interfaces';
import { Card, CardBody, Flex, HStack, Heading, Image } from '@chakra-ui/react';
import { CriticScore, Emoji, PlatformIconList } from '.';
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
        <Flex justifyContent="space-between" alignItems="center">
          <Heading fontSize="2xl" whiteSpace="break-spaces">{game.name}</Heading>
          <Emoji rating={ game.rating_top } />
        </Flex>
      </CardBody>
    </Card>
  );

};

export default GameCard;
