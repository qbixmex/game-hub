import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {

  const { data, isLoading, errorMessage } = useGenres();

  if (errorMessage) return null;
  if (isLoading) return <Spinner size="xl" color="purple.400" />;

  return (
    <List>
      {!isLoading && data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={3}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={10}
              borderRadius={8}
              objectFit="cover"
            />
            <Text fontSize="2xl">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
