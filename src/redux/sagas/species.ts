import { AxiosResponse } from 'axios';
import {
  all,
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import {
  IGetSpeciesResponse,
  SpeciesArrayType
} from 'src/interfaces/redux/species-redux.interface';

import * as ENDPOINTS from 'src/constants/endpoints';
import * as actions from 'src/redux/actions';
import * as api from 'src/utils/api';
import { ISettled, settled } from 'src/utils/settled';

function* getSpeciesSaga(): Generator {
  try {
    const result = (
      yield call(api.get, ENDPOINTS.getSpecies())
    ) as AxiosResponse<IGetSpeciesResponse>;
    if (result.status === 200) {
      const pages = Math.ceil(result.data.count / 10);
      const leftPages = Array.from({ length: (pages - 1) }, (_, i) => 2 + i);
      let letfValues = (
        yield all(leftPages.map((page => settled(ENDPOINTS.getSpecies(page)))))
      ) as ISettled<AxiosResponse<IGetSpeciesResponse>>[];
      const failedValues = letfValues.filter(item => item.status === 'rejected');
      if (failedValues.length) {
        const letfFailedValues = (
          yield all(failedValues.map((failedValue => settled(failedValue.endpoint))))
        ) as ISettled<AxiosResponse<IGetSpeciesResponse>>[];
        letfValues = letfValues.concat(letfFailedValues);
      }

      let leftSpecies: SpeciesArrayType = [];
      letfValues
        .filter(item => item.status === 'fulfilled')
        .forEach(item => {
          if (item.value?.data?.results?.length) {
            leftSpecies = leftSpecies.concat(item.value.data.results)
          }
        });
      yield put(actions.setSpeciesAction([...result.data.results, ...leftSpecies]));
    }
  } catch (e: any) {
    console.log('e', e)
  }
}

export default function* speciesSaga() {
  yield all([
    takeLatest(actions.getSpeciesAction, getSpeciesSaga),
  ]);
}
