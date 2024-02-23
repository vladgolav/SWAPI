import { AxiosResponse } from 'axios';
import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import {
  IGetPeopleListAction,
  IGetPeopleListResponse
} from 'src/interfaces/redux/people-list-redux.interface';

import * as ENDPOINTS from 'src/constants/endpoints';
import * as actions from 'src/redux/actions';
import * as api from 'src/utils/api';

function* getPeopleList({ payload } : { payload: IGetPeopleListAction }): Generator {
  try {
    yield put(actions.setLoading({ [payload.loading]: true }));

    const result = (
      yield call(api.get, ENDPOINTS.getPeopleList(payload.page))
    ) as AxiosResponse<IGetPeopleListResponse>;
    if (result.status === 200) {
      if (payload.page === 1) {
        yield put(actions.setPeopleListAction({
          list: result.data.results,
          count: result.data.count
        }));
      } else {
        yield put(actions.setMorePeopleListAction({
          list: result.data.result
        }));
      }
    }

    yield put(actions.setLoading({ [payload.loading]: false }));
  } catch (e: any) {
    yield put(actions.setLoading({ [payload.loading]: false }));
  }
}

export default function* peopleListSaga() {
  yield all([
    takeLatest(actions.getPeopleListAction, getPeopleList),
  ]);
}
