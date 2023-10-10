import { useQuery } from '@tanstack/react-query';
import { Genre, FetchResponse } from '../interfaces';
import genresResponse from '../data/genres';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => useQuery<FetchResponse<Genre>, Error>({
  queryKey: ['genres'],
  queryFn: async () => await apiClient.getAll(),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: genresResponse,
});

export default useGenres;
