import { createReducer } from 'redux-act';
import { FilmsArrayType, IFilmsReducer } from 'src/interfaces/redux/films-redux.interface';

import * as actions from 'src/redux/actions';

const initialState: IFilmsReducer = {
  films: [],
  lastUpdatedTime: null,
};

const filmsReducer = createReducer<IFilmsReducer>({
  [actions.setFilmsAction.getType()]: (state: IFilmsReducer, payload: FilmsArrayType) => ({
    ...state,
    films: payload,
    lastUpdatedTime: new Date(),
  }),
}, initialState);

export default filmsReducer;
