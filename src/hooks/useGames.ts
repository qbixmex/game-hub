import { useInfiniteQuery } from '@tanstack/react-query';
import { FetchResponse, Game, GameQuery } from '../interfaces';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
  queryKey: ['games', gameQuery],
  queryFn: async ({ pageParam = 1 }) => await apiClient.getAll({
    params: {
      genres: gameQuery.genreId,
      parent_platform: gameQuery.platformId,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      page: pageParam,
    }
  }),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  getNextPageParam: (lasPage, allPages) => {
    return lasPage.next ? allPages.length + 1 : undefined;
  },
});

export default useGames;
