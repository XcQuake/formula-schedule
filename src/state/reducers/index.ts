import { combineReducers } from 'redux';
import standingReducer from './standingReducer';
import scheduleReducer from './scheduleReducer';

const reducers = combineReducers({
  standing: standingReducer,
  schedule: scheduleReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
