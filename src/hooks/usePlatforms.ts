import { useQuery } from '@tanstack/react-query';
import { FetchResponse, Platform } from '../interfaces';
import platformsResponse from '../data/platforms';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
  queryKey: ['platforms'],
  queryFn: async () => await apiClient.getAll(),
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: platformsResponse,
});

export default usePlatforms;
