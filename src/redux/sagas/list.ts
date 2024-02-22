import { AxiosResponse } from 'axios';
import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';


import { IGetListAction } from 'src/interfaces/redux/list-redux.interface';

import * as ENDPOINTS from 'src/constants/endpoints';
import * as actions from 'src/redux/actions';
import * as api from 'src/utils/api';

function* getList({ payload } : { payload: IGetListAction }): Generator {
  try {
    const result = (yield call(api.get, ENDPOINTS.getList(payload.page))) as AxiosResponse;
    console.log('test', result)
    if (result.status === 200) {
      yield put(actions.setListAction(result.data));
    }
  } catch (e: any) {
  }
}

export default function* listSaga() {
  yield all([
    takeLatest(actions.getListAction, getList),
  ]);
}
