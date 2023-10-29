import { FC } from 'react';
import useTrailers from '../hooks/useTrailers';
import { Box } from '@chakra-ui/react';

type Props = {
  gameId: number;
}

const GameTrailer: FC<Props> = ({ gameId }) => {
  const { data: trailers, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const firstTrailer = trailers?.results[0];

  return (!firstTrailer) ? null : (
    <Box mb={5}>
      <video
        src={ firstTrailer.data[480] }
        poster={ firstTrailer.preview }
        controls
      />
    </Box>
  );
};

export default GameTrailer;