export interface Games {
  count:                number;
  next:                 string | null;
  previous:             string | null;
  results:              Game[];
  seo_title:            string;
  seo_description:      string;
  seo_keywords:         string;
  seo_h1:               string;
  noindex:              boolean;
  nofollow:             boolean;
  description:          string;
  filters:              Filters;
  nofollow_collections: string[];
}

export interface Filters {
  years: FiltersYear[];
}

export interface FiltersYear {
  from:     number;
  to:       number;
  filter:   string;
  decade:   number;
  years:    YearYear[];
  nofollow: boolean;
  count:    number;
}

export interface YearYear {
  year:     number;
  count:    number;
  nofollow: boolean;
}

export interface Game {
  id:                 number;
  slug:               string;
  name:               string;
  released:           string;
  tba:                boolean;
  description:        string;
  description_raw:    string;
  background_image:   string;
  rating:             number;
  rating_top:         number;
  ratings:            Rating[];
  ratings_count:      number;
  reviews_text_count: number;
  added:              number;
  added_by_status:    AddedByStatus;
  metacritic:         number;
  playtime:           number;
  suggestions_count:  number;
  updated:            string;
  user_game:          null;
  reviews_count:      number;
  saturated_color:    string;
  dominant_color:     string;
  platforms:          PlatformElement[];
  parent_platforms:   { platform: Platform }[];
  genres:             Genre[];
  stores:             Store[];
  publishers:         Publisher[];
  clip:               null;
  tags:               Genre[];
  esrb_rating:        EsrbRating;
  short_screenshots:  ShortScreenshot[];
}

export interface AddedByStatus {
  yet:     number;
  owned:   number;
  beaten:  number;
  toplay:  number;
  dropped: number;
  playing: number;
}

export interface EsrbRating {
  id:   number;
  name: string;
  slug: string;
}

export interface FetchResponse<T> {
  id?: number;
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

export interface Genre {
  id:               number;
  name:             string;
  slug:             string;
  games_count:      number;
  image_background: string;
  domain?:          string;
  language?:        string;
}

export interface Publisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

export interface Platform {
  id:   number;
  name: string;
  slug: string;
}

export interface PlatformElement {
  platform:        PlatformPlatform;
  released_at:     string;
  requirements_en: Requirements | null;
  requirements_ru: Requirements | null;
}

export interface PlatformPlatform {
  id:               number;
  name:             string;
  slug:             string;
  image:            null;
  year_end:         null;
  year_start:       number | null;
  games_count:      number;
  image_background: string;
}

export interface Requirements {
  minimum:      string;
  recommended?: string;
}

export interface Rating {
  id:      number;
  title:   string;
  count:   number;
  percent: number;
}

export interface ShortScreenshot {
  id:    number;
  image: string;
}

export interface Store {
  id:    number;
  store: Genre;
}
