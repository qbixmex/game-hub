import { Game, GameQuery } from '../interfaces';
import useData from './useData';

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    'games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }
    },
    [gameQuery]
  );
};

export default useGames;
