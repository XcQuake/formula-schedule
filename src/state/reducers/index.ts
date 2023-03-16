import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';
import wikiDataReducer from './wikiDataReducer';
import statsReducer from './statsReducer';
import resultReducer from './resultReducer';
import driverInfoReducer from './driverInfoReducer';
import weekendReducer from './weekendReducer';
import driverReducer from './driverReducer';
import seasonsReducer from './seasonsReducer';
import dropdownReducer from './dropdownReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
  result: resultReducer,
  weekend: weekendReducer,
  wikiData: wikiDataReducer,
  stats: statsReducer,
  driverInfo: driverInfoReducer,
  driver: driverReducer,
  seasons: seasonsReducer,
  dropdown: dropdownReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
