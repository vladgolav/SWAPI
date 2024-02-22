import { createReducer } from 'redux-act';
import { IListReducer, ISetListAction } from 'src/interfaces/redux/list-redux.interface';
import * as actions from 'src/redux/actions';

const initialState: IListReducer = {
  list: null,
};

const listReducer = createReducer<IListReducer>({
  [actions.setListAction.getType()]: (state: IListReducer, payload: ISetListAction) => ({
    ...state,
    list: payload.list,
  }),
}, initialState);

export default listReducer;
