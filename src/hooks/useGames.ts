import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import { FetchResponse, Game } from '../interfaces';
import APIClient from '../services/api-client';
import useGameQueryStore from '../store';


const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore(selector => selector.gameQuery);

  return useInfiniteQuery<FetchResponse<Game>, Error>({
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
    staleTime: ms('24h'),
    getNextPageParam: (lasPage, allPages) => {
      return lasPage.next ? allPages.length + 1 : undefined;
    },
  });
};


export default useGames;
