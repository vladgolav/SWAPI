import { LoadingType } from "./loading-redux.interface";

export interface IPeople {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  url: string;
  created: Date;
  edited: Date;
  films: string[];
  species: string[];
  starships: string[];
  vehicles: string[];
}

export type PeopleArrayType = IPeople[];

// reducer

export interface IPeopleListReducer {
  list: PeopleArrayType;
  count: number;
  currentPage: number;
}

// actions

export interface IGetPeopleListAction {
  page: number;
  loading: LoadingType;
}

export interface ISetPeopleListAction {
  list: PeopleArrayType,
  count?: number,
}

// responses

export interface IGetPeopleListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PeopleArrayType;
}
