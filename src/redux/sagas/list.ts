import { AxiosResponse } from 'axios';
import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import { IGetListAction, IGetListResponse } from 'src/interfaces/redux/list-redux.interface';

import * as ENDPOINTS from 'src/constants/endpoints';
import * as actions from 'src/redux/actions';
import * as api from 'src/utils/api';

function* getList({ payload } : { payload: IGetListAction }): Generator {
  try {
    yield put(actions.setLoading({ [payload.loading]: true }));

    const result = (
      yield call(api.get, ENDPOINTS.getList(payload.page))
    ) as AxiosResponse<IGetListResponse>;
    
    if (result.status === 200) {
      if (payload.page === 1) {
        yield put(actions.setListAction({
          list: result.data.result,
          count: result.data.count
        }));
      } else {
        yield put(actions.setMoreListAction({
          list: result.data.result
        }));
      }
    }

    yield put(actions.setLoading({ [payload.loading]: false }));
  } catch (e: any) {
    yield put(actions.setLoading({ [payload.loading]: false }));
  }
}

export default function* listSaga() {
  yield all([
    takeLatest(actions.getListAction, getList),
  ]);
}
