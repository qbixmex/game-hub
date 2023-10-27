import { FC } from 'react';
import { SimpleGrid, Text } from "@chakra-ui/react";
import { DefinitionItem, CriticScore } from ".";
import { Game } from "../interfaces";

type Props = {
  game: Game;
};

const GameAttributes: FC<Props> = ({ game }) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform: { id, name } }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>

      <DefinitionItem term="Genres">
        {game.genres?.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>

      <DefinitionItem term="Publishers">
        {game.publishers?.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
