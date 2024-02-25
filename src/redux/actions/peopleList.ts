import { createAction } from "redux-act";

import {
  IGetPeopleListAction,
  ISetPeopleListAction
} from "src/interfaces/redux/people-list-redux.interface";

export const getPeopleListAction = createAction<IGetPeopleListAction>('GET_PEOPLE_LIST_ACTION');
export const setPeopleListAction = createAction<ISetPeopleListAction>('SET_PEOPLE_LIST_ACTION');
export const setMorePeopleListAction = createAction<ISetPeopleListAction>('SET_MORE_LIST_ACTION');
export const setCurrentPageAction = createAction<number>('SET_CURRENT_PAGE_ACTION');
