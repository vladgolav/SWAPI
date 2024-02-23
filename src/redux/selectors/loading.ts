import { createSelector } from "@reduxjs/toolkit";

import { IRootState } from "..";
import { LoadingType } from "src/interfaces/redux/loading-redux.interface";

export const loadingSelector = createSelector(
  (state: IRootState, key: LoadingType) => state.loading[key],
  (value) => value
);
