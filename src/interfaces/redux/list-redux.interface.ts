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

export type PeopleArray = IPeople[];

// reducer

export interface IListReducer {
  list: PeopleArray;
  count: number;
  currentPage: number;
}

// actions

export interface IGetListAction {
  page: number;
  loading: LoadingType;
}

export interface ISetListAction {
  list: PeopleArray,
  count?: number,
}

// responses

export interface IGetListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  result: PeopleArray;
}
