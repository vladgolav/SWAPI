import { createReducer } from 'redux-act';
import { ISpeciesReducer, SpeciesArrayType } from 'src/interfaces/redux/species-redux.interface';

import * as actions from 'src/redux/actions';

const initialState: ISpeciesReducer = {
  species: [],
  lastUpdatedTime: null,
};

const planetsReducer = createReducer<ISpeciesReducer>({
  [actions.setSpeciesAction.getType()]: (state: ISpeciesReducer, payload: SpeciesArrayType) => ({
    ...state,
    species: payload,
    lastUpdatedTime: new Date(),
  }),
}, initialState);

export default planetsReducer;
