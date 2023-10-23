import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genresResponse from '../data/genres';
import { FetchResponse, Genre } from '../interfaces';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
  queryKey: ['genres'],
  queryFn: async () => await apiClient.getAll(),
  staleTime: ms('24h'),
  initialData: genresResponse,
});

export default useGenres;
