import { combineReducers } from 'redux';

import peopleList from './peopleList';
import loading from './loading';
import favorite from './favorite';
import films from './films';
import planets from './planets';
import species from './species';
import person from './person';

const reducer = combineReducers({
  peopleList,
  loading,
  favorite,
  films,
  planets,
  species,
  person,
});

export default reducer;
