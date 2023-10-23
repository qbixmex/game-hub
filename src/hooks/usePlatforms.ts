import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import platformsResponse from '../data/platforms';
import { FetchResponse, Platform } from '../interfaces';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => useQuery<FetchResponse<Platform>, Error>({
  queryKey: ['platforms'],
  queryFn: async () => await apiClient.getAll(),
  staleTime: ms('24h'),
  initialData: platformsResponse,
});

export default usePlatforms;
