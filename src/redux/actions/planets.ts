import { createAction } from "redux-act";

import { PlanetsArrayType } from "src/interfaces/redux/planets-redux.interface";

export const getPlanetsAction = createAction('GET_PLANETS_ACTION');
export const setPlanetsAction = createAction<PlanetsArrayType>('SET_PLANETS_ACTION');
