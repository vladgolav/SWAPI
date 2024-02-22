import { createAction } from "redux-act";

import { IGetListAction, ISetListAction } from "src/interfaces/redux/list-redux.interface";

export const getListAction = createAction<IGetListAction>('GET_LIST_ACTION');
export const setListAction = createAction<ISetListAction>('SET_LIST_ACTION');
