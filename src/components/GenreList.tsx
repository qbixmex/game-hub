import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import useGameQueryStore from '../store';

const GenreList = () => {

  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore(selector => selector.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore(selector => selector.setGenreId);

  if (error) return null;
  if (isLoading) return <Spinner size="xl" color="purple.400" />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
        {data?.results.map(genre => (
          <ListItem key={genre.id}>
            <HStack paddingY={3}>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={10}
                borderRadius={8}
                objectFit="cover"
                wordBreak="break-word"
                marginRight={2}
              />
              <Button
                fontSize="2xl"
                variant="link"
                fontWeight={genre.id === selectedGenreId ? 'bold': 'normal'}
                color={genre.id === selectedGenreId ? 'purple.400' : ''}
                onClick={() => setSelectedGenreId(genre.id)}
                whiteSpace="normal"
                textAlign="left"
              >{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
