import { RapidDriver } from '../../models/rapidApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface DriverInfoState {
  driver: RapidDriver | null;
}

const initialState = {
  driver: null,
};

const driverinfoReducer = (
  state: DriverInfoState = initialState,
  action: Action,
): DriverInfoState => {
  switch (action.type) {
    case ActionType.FETCH_DRIVERINFO:
      return { driver: action.payload };
    default:
      return state;
  }
};

export default driverinfoReducer;
