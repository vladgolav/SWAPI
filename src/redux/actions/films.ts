import { createAction } from "redux-act";

import { FilmsArrayType } from "src/interfaces/redux/films-redux.interface";

export const getFilmsAction = createAction('GET_FILMS_ACTION');
export const setFilmsAction = createAction<FilmsArrayType>('SET_FILMS_ACTION');
