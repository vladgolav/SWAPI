import { CallEffect, call } from "redux-saga/effects";
import * as api from 'src/utils/api';

export interface ISettled<T> {
  status: 'fulfilled' | 'rejected';
  value: T;
  reason?: any;
  endpoint: string; 
}

export const settled = (endpoint: string): CallEffect =>
  call(function*(): Generator {
    try {
      return { status: "fulfilled", value: yield call(api.get, endpoint), endpoint };
    } catch (err) {
      return { status: "rejected", reason: err, endpoint };
    }
  });
