import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Genre, FetchResponse } from '../interfaces';
import genresResponse from '../data/genres';

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: async () => {
    const response = await apiClient.get<FetchResponse<Genre>>('/genres')
    return response.data;
  },
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: genresResponse,
});

export default useGenres;
