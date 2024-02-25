import { FilmsArrayType } from "./films-redux.interface";
import { IPerson } from "./people-list-redux.interface";
import { IPlanet } from "./planets-redux.interface";
import { SpeciesArrayType } from "./species-redux.interface";


export interface IPersonSelector extends Omit<IPerson, 'films' | 'homeworld' | 'species'> {
  homeworld: IPlanet;
  films: FilmsArrayType;
  species: SpeciesArrayType;
}

// reducer

export interface IPersonReducer {
  currentPerson: IPerson | null;
}

// actions

export type SetCurrentPersonActionType = IPerson | null;
