import { FC } from 'react';
import { Card, CardBody, Flex, HStack, Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { CriticScore, Emoji, PlatformIconList } from '.';
import { Game } from '../interfaces';
import getCroppedImageUrl from '../services/image-url';

const GameCard: FC<{game: Game}> = ({ game }) => {
  return (
    <Card>
      <Link to={`/games/${game.slug}`}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
      </Link>
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
          <Heading fontSize="2xl" whiteSpace="break-spaces">
          <Link to={`/games/${game.slug}`}>{game.name}</Link>
          </Heading>
          <Emoji rating={ game.rating_top } />
        </Flex>
      </CardBody>
    </Card>
  );

};

export default GameCard;
