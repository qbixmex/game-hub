import { Platform } from '../interfaces';
import useData from './useData';

const usePlatforms = () => useData<Platform>('platforms/lists/parents');

export default usePlatforms;
