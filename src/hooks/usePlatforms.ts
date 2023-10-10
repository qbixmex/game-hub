import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FetchResponse, Platform } from '../interfaces';
import platformsResponse from '../data/platforms';

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: async() => {
    const response = await apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents');
    return response.data;
  },
  staleTime: 24 * 60 * 60 * 1000, // 24 hours
  initialData: platformsResponse,
});

export default usePlatforms;
