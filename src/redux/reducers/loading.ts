import { createReducer } from 'redux-act';
import { ILoadingReducer, ISetLoadingAction } from 'src/interfaces/redux/loading-redux.interface';
import * as actions from 'src/redux/actions';

const initialState: ILoadingReducer = {
  getPeopleList: false,
  refreshPeopleList: false,
  loadMorePeopleList: false,
  getPersonInfo: false,
};

const loadingReducer = createReducer<ILoadingReducer>({
  [actions.setLoading.getType()]: (state: ILoadingReducer, payload: ISetLoadingAction) => ({
    ...state,
    ...payload,
  }),
}, initialState);

export default loadingReducer;
