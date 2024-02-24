import { combineReducers } from 'redux';

import peopleList from './peopleList';
import loading from './loading';
import favorite from './favorite';

const reducer = combineReducers({
  peopleList,
  loading,
  favorite,
});

export default reducer;
