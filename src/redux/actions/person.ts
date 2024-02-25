import { createAction } from "redux-act";

import { SetCurrentPersonActionType } from "src/interfaces/redux/person-redux.interface";

export const getCurrentPersonAction = createAction<SetCurrentPersonActionType>(
  'GET_CURRENT_PERSON_ACTION'
);
export const setCurrentPersonAction = createAction<SetCurrentPersonActionType>(
  'SET_CURRENT_PERSON_ACTION'
);
