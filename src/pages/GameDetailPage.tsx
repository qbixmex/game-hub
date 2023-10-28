import { useParams } from 'react-router-dom';
import { Heading, Spinner } from '@chakra-ui/react';
import { ExpandableText, GameAttributes, GameScreenshots, GameTrailer } from '../components';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading mb={2}>{ game.name }</Heading>
      <ExpandableText>{ game.description_raw }</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
      <GameScreenshots gameId={game.id} />
    </>
  );
};

export default GameDetailPage;