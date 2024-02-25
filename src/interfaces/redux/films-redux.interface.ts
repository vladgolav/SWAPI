export interface IFilm {
  characters: string[];
  created: Date;
  director: string;
  edited: Date;
  episode_id: string;
  opening_crawl: string;
  planets: string[];
  producer: string;
  release_date: Date;
  species: string[];
  starships: string[];
  title: string;
  url: string;
  vehicles: string[];
}

export type FilmsArrayType = IFilm[];

// reducer

export interface IFilmsReducer {
  films: FilmsArrayType;
  lastUpdatedTime: Date | null;
}

// responses

export interface IGetFilmsResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: FilmsArrayType;
}