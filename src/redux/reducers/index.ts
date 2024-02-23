import { combineReducers } from 'redux';

import peopleList from './peopleList';
import loading from './loading';

const reducer = combineReducers({
  peopleList,
  loading,
});

export default reducer;
