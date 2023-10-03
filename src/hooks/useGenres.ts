import { Genre } from "../interfaces";

import useData from "./useData";

const useGenres = () => useData<Genre>('genres');

export default useGenres;
