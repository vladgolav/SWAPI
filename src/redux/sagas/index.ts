import { all } from 'redux-saga/effects';

import peopleListSaga from './peopleList';
import filmsSaga from './films';
import speciesSaga from './species';
import planetsSaga from './planets';

export default function* rootSaga(): any {
  yield all([
    peopleListSaga(),
    filmsSaga(),
    speciesSaga(),
    planetsSaga(),
  ]);
}
