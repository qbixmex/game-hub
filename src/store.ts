import { create } from 'zustand';

interface GameQuery {
  genreId?: string;
  platformId?: string;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: string) => void;
  setPlatformId: (platformId: string) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText }})),
  setGenreId: (genreId) => set((store) => ({
    gameQuery: { ...store.gameQuery, genreId }
  })),
  setPlatformId: (platformId) => set((store) => ({
    gameQuery: { ...store.gameQuery, platformId }
  })),
  setSortOrder: (sortOrder) => set((store) => ({
    gameQuery: {
      ...store.gameQuery,
      sortOrder
    }
  })),
}));

export default useGameQueryStore;
