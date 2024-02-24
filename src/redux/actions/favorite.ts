import { createAction } from "redux-act";

import { IPerson } from "src/interfaces/redux/people-list-redux.interface";

export const addToFavoriteListAction = createAction<IPerson>(
  'ADD_TO_FAVORITE_LIST_ACTION'
);
export const removeFromFavoriteListAction = createAction<string>(
  'REMOVE_FROM_FAVORITE_LIST_ACTION'
);
export const clearFavoriteListAction = createAction('CLEAR_FAVORITE_LIST_ACTION');
