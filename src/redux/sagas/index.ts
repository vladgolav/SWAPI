import { all } from 'redux-saga/effects';

import peopleListSaga from './peopleList';

export default function* rootSaga(): any {
  yield all([
    peopleListSaga(),
  ]);
}
