import { createReducer } from 'redux-act';
import {
  IPersonReducer,
  SetCurrentPersonActionType,
} from 'src/interfaces/redux/person-redux.interface';

import * as actions from 'src/redux/actions';

const initialState: IPersonReducer = {
  currentPerson: null,
};

const personReducer = createReducer<IPersonReducer>({
  [actions.setCurrentPersonAction.getType()]: (
    state: IPersonReducer,
    payload: SetCurrentPersonActionType,
  ) => ({
    ...state,
    currentPerson: payload,
  }),
}, initialState);

export default personReducer;
