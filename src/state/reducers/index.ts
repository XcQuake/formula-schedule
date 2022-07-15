import { combineReducers } from 'redux';
import driversStandingReducer from './driversStandingReducer';

const reducers = combineReducers({
  driversStanding: driversStandingReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
