import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';
import wikiDataReducer from './wikiDataReducer';
import popupReducer from './popupReducer';
import resultReducer from './resultReducer';
import driverReducer from './driverReducer';
import elementReducer from './elementReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
  result: resultReducer,
  element: elementReducer,
  wikiData: wikiDataReducer,
  popup: popupReducer,
  driver: driverReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
