import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Game, GameQuery } from '../interfaces';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: async () => await apiClient.getAll({
    params: {
      genres: gameQuery.genre?.id,
      parent_platform: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    }
  }),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
})

export default useGames;
