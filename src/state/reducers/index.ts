import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';
import weekendReducer from './weekendReducer';
import wikiDataReducer from './wikiDataReducer';
import popupReducer from './popupReducer';
import resultReducer from './resultReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
  result: resultReducer,
  weekend: weekendReducer,
  wikiData: wikiDataReducer,
  popup: popupReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
