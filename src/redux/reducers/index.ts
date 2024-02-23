import { combineReducers } from 'redux';

import list from './list';
import loading from './loading';

const reducer = combineReducers({
  list,
  loading,
});

export default reducer;
