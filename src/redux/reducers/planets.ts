import { createReducer } from 'redux-act';
import { IPlanetsReducer, PlanetsArrayType } from 'src/interfaces/redux/planets-redux.interface';

import * as actions from 'src/redux/actions';

const initialState: IPlanetsReducer = {
  planets: [],
  lastUpdatedTime: null,
};

const planetsReducer = createReducer<IPlanetsReducer>({
  [actions.setPlanetsAction.getType()]: (state: IPlanetsReducer, payload: PlanetsArrayType) => ({
    ...state,
    planets: payload,
    lastUpdatedTime: new Date(),
  }),
}, initialState);

export default planetsReducer;
