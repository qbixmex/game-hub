import { Box } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <Box padding="40px">
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default GenreList;
