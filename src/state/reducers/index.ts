import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';
import wikiDataReducer from './wikiDataReducer';
import popupReducer from './popupReducer';
import resultReducer from './resultReducer';
import driverInfoReducer from './driverInfoReducer';
import weekendReducer from './weekendReducer';
import driverReducer from './driverReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
  result: resultReducer,
  weekend: weekendReducer,
  wikiData: wikiDataReducer,
  popup: popupReducer,
  driverInfo: driverInfoReducer,
  driver: driverReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
