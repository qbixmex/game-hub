import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {

  const { data: genres } = useGenres();

  return (
    <List>
      {genres.map((genre) => (
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
