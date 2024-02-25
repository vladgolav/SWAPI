import { createAction } from "redux-act";

import { SpeciesArrayType } from "src/interfaces/redux/species-redux.interface";

export const getSpeciesAction = createAction('GET_SPECIES_ACTION');
export const setSpeciesAction = createAction<SpeciesArrayType>('SET_SPECIES_ACTION');
