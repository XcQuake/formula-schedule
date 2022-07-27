import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';
import weekendReducer from './weekendReducer';
import wikiDataReducer from './wikiDataReducer';
import popupReducer from './popupReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
  weekend: weekendReducer,
  wikiData: wikiDataReducer,
  popup: popupReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
