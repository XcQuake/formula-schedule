import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';
import weekendReducer from './weekendReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
  weekend: weekendReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
