import { all } from 'redux-saga/effects';

import listSaga from './list';

export default function* rootSaga(): any {
  yield all([
    listSaga(),
  ]);
}
