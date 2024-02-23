import { createReducer } from 'redux-act';
import { IListReducer, ISetListAction } from 'src/interfaces/redux/list-redux.interface';
import * as actions from 'src/redux/actions';

const initialState: IListReducer = {
  list: [],
  currentPage: 1,
  count: 0,
};

const listReducer = createReducer<IListReducer>({
  [actions.setListAction.getType()]: (state: IListReducer, payload: ISetListAction) => ({
    ...state,
    list: payload.list,
    count: payload.count as number,
  }),
  [actions.setMoreListAction.getType()]: (state: IListReducer, payload: ISetListAction) => ({
    ...state,
    list: state.list.concat(payload.list),
  }),
  [actions.setCurrentPageAction.getType()]: (state: IListReducer, payload: number) => ({
    ...state,
    currentPage: payload,
  }),
}, initialState);

export default listReducer;
