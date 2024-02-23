import { createReducer } from 'redux-act';
import {
  IPeopleListReducer,
  ISetPeopleListAction
} from 'src/interfaces/redux/people-list-redux.interface';
import * as actions from 'src/redux/actions';

const initialState: IPeopleListReducer = {
  list: [],
  currentPage: 1,
  count: 0,
};

const listReducer = createReducer<IPeopleListReducer>({
  [actions.setPeopleListAction.getType()]: (
    state: IPeopleListReducer,
    payload: ISetPeopleListAction
  ) => ({
    ...state,
    list: payload.list,
    count: payload.count as number,
  }),
  [actions.setMorePeopleListAction.getType()]: (
    state: IPeopleListReducer,
    payload: ISetPeopleListAction
  ) => ({
    ...state,
    list: state.list.concat(payload.list),
  }),
  [actions.setCurrentPageAction.getType()]: (state: IPeopleListReducer, payload: number) => ({
    ...state,
    currentPage: payload,
  }),
}, initialState);

export default listReducer;
