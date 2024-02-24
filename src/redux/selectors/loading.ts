import { createSelector } from "@reduxjs/toolkit";

import { IRootState } from "..";
import { LoadingType } from "src/interfaces/redux/loading-redux.interface";

export const loadingSelector = createSelector(
  [
    (state: IRootState) => state.loading,
    (state, key: LoadingType) => key,
  ],
  (value, key) => value[key],
);
