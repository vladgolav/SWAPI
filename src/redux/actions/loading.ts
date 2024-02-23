import { createAction } from "redux-act";

import { ISetLoadingAction } from "src/interfaces/redux/loading-redux.interface";

export const setLoading = createAction<ISetLoadingAction>('SET_LOADING_ACTION');
