import { AxiosResponse } from 'axios';
import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import {
  IGetPlanetsResponse,
  PlanetsArrayType
} from 'src/interfaces/redux/planets-redux.interface';

import * as ENDPOINTS from 'src/constants/endpoints';
import * as actions from 'src/redux/actions';
import * as api from 'src/utils/api';
import { ISettled, settled } from 'src/utils/settled';

function* getPlanetsSaga(): Generator {
  try {
    const result = (
      yield call(api.get, ENDPOINTS.getPlanets())
    ) as AxiosResponse<IGetPlanetsResponse>;
    if (result.status === 200) {
      const pages = Math.ceil(result.data.count / 10);
      const leftPages = Array.from({ length: (pages - 1) }, (_, i) => 2 + i);
      let letfValues = (
        yield all(leftPages.map((page => settled(ENDPOINTS.getPlanets(page)))))
      ) as ISettled<AxiosResponse<IGetPlanetsResponse>>[];
      const failedValues = letfValues.filter(item => item.status === 'rejected');
      if (failedValues.length) {
        const letfFailedValues = (
          yield all(failedValues.map((failedValue => settled(failedValue.endpoint))))
        ) as ISettled<AxiosResponse<IGetPlanetsResponse>>[];
        letfValues = letfValues.concat(letfFailedValues);
      }

      let leftPlanets: PlanetsArrayType = [];
      letfValues
        .filter(item => item.status === 'fulfilled')
        .forEach(item => {
          if (item.value?.data?.results?.length) {
            leftPlanets = leftPlanets.concat(item.value.data.results)
          }
        });
      yield put(actions.setPlanetsAction([...result.data.results, ...leftPlanets]));
    }
  } catch (e: any) {
    console.log('e', e)
  }
}

export default function* planetsSaga() {
  yield all([
    takeLatest(actions.getPlanetsAction, getPlanetsSaga),
  ]);
}
