import { FC } from "react";
import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from "../services/image-url";
import { Genre } from "../interfaces";

type Props = {
  selectGenre: (genre: Genre) => void;
};

const GenreList: FC<Props> = ({ selectGenre }) => {

  const { data, isLoading, errorMessage } = useGenres();

  if (errorMessage) return null;
  if (isLoading) return <Spinner size="xl" color="purple.400" />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={3}>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize={10}
              borderRadius={8}
              objectFit="cover"
            />
            <Button
              fontSize="2xl"
              variant="link"
              onClick={() => selectGenre(genre)}
            >{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
