import { combineReducers } from 'redux';
import driversStandingReducer from './driversStandingReducer';
import scheduleReducer from './scheduleReducer';

const reducers = combineReducers({
  driversStanding: driversStandingReducer,
  schedule: scheduleReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
