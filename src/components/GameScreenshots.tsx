import { FC } from 'react';
import useScreenshots from '../hooks/useScreenshots';
import { Image, SimpleGrid } from '@chakra-ui/react';

type Props = {
  gameId: number;
};

const GameScreenshots: FC<Props> = ({ gameId }) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;
  if (!data) return null;

  const screenshots = data.results;

  return (
    <SimpleGrid columns={{ base: 1, md: 2}} spacing={2}>
      {
        screenshots.map(screenshot => (
          <Image key={screenshot.id} src={ screenshot.image } />
        ))
      }
    </SimpleGrid>
  );

};

export default GameScreenshots;
