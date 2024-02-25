import { AxiosResponse } from 'axios';
import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import { IGetFilmsResponse } from 'src/interfaces/redux/films-redux.interface';

import * as ENDPOINTS from 'src/constants/endpoints';
import * as actions from 'src/redux/actions';
import * as api from 'src/utils/api';

function* getFilmsSaga(): Generator {
  try {
    const result = (
      yield call(api.get, ENDPOINTS.getFilms())
    ) as AxiosResponse<IGetFilmsResponse>;
    if (result.status === 200) {
      yield put(actions.setFilmsAction(result.data.results));
    }
  } catch (e: any) {
  }
}

export default function* filmsSaga() {
  yield all([
    takeLatest(actions.getFilmsAction, getFilmsSaga),
  ]);
}
