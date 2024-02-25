import { combineReducers } from 'redux';

import peopleList from './peopleList';
import loading from './loading';
import favorite from './favorite';
import films from './films';
import planets from './planets';
import species from './species';

const reducer = combineReducers({
  peopleList,
  loading,
  favorite,
  films,
  planets,
  species,
});

export default reducer;
