import { createReducer } from 'redux-act';
import {
  IFavoriteListReducer
} from 'src/interfaces/redux/favorite-redux.interface';
import { IPerson } from 'src/interfaces/redux/people-list-redux.interface';
import * as actions from 'src/redux/actions';

const initialState: IFavoriteListReducer = {
  favoriteList: [],
};

const favoriteReducer = createReducer<IFavoriteListReducer>({
  [actions.addToFavoriteListAction.getType()]: (
    state: IFavoriteListReducer,
    payload: IPerson,
  ) => ({
    ...state,
    favoriteList: state.favoriteList.concat(payload),
  }),
  [actions.removeFromFavoriteListAction.getType()]: (
    state: IFavoriteListReducer,
    payload: string,
  ) => ({
    ...state,
    favoriteList: state.favoriteList.filter(item => item.url !== payload),
  }),
  [actions.clearFavoriteListAction.getType()]: () => ({
    ...initialState
  }),
}, initialState);

export default favoriteReducer;
