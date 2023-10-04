import { Genre, Platform } from ".";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

