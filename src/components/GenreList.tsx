import { FC } from "react";
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../interfaces";

type Props = {
  selectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
};

const GenreList: FC<Props> = ({ selectGenre, selectedGenreId }) => {

  const { data, isLoading, errorMessage } = useGenres();

  if (errorMessage) return null;
  if (isLoading) return <Spinner size="xl" color="purple.400" />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
      <List>
        {data.map((genre) => (
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
                color={genre.id === selectedGenreId ? 'purple.400': 'white'}
                onClick={() => selectGenre(genre)}
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
