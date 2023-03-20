import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';
import wikiDataReducer from './wikiDataReducer';
import resultReducer from './resultReducer';
import driverInfoReducer from './driverInfoReducer';
import weekendReducer from './weekendReducer';
import driverReducer from './driverReducer';
import dropdownReducer from './dropdownReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
  result: resultReducer,
  weekend: weekendReducer,
  wikiData: wikiDataReducer,
  driverInfo: driverInfoReducer,
  driver: driverReducer,
  dropdown: dropdownReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
