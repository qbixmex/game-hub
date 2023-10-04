import { Game, Genre } from "../interfaces";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>(
    'games',
    { params: { genres: selectedGenre?.id } },
    [selectedGenre?.id]
  );
};

export default useGames;
