export interface ISpecie {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: Date;
  designation: string;
  edited: Date;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: string[];
  films: string[];
  skin_colors: string;
  url: string;
}

export type SpeciesArrayType = ISpecie[];

// reducer

export interface ISpeciesReducer {
  species: SpeciesArrayType;
  lastUpdatedTime: Date | null;
}

// responses

export interface IGetSpeciesResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: SpeciesArrayType;
}
