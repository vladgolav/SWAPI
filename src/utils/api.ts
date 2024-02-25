import * as effects from 'redux-saga/effects';

import { AxiosRequestConfig, AxiosResponse } from 'axios';
import api from './apiConfig';

export function* get(endpoint: string, options?: AxiosRequestConfig | null):  Generator {
  try {
    return (yield effects.call(api.get, endpoint, options || {})) as AxiosResponse;
  } catch (error: any) {
    console.log('error', JSON.stringify(error));
    if (!error?.response) throw error;
  }
}
