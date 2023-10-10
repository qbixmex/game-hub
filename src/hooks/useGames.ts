import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Game, GameQuery } from '../interfaces';
import apiClient from '../services/api-client';

const useGames = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: async () => {
    const response = await apiClient.get<FetchResponse<Game>>('/games', {
      params: {
        genres: gameQuery.genre?.id,
        parent_platform: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }
    });
    return response.data;
  },
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
})

export default useGames;
