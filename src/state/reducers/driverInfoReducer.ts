import { Driver } from '../../models/ergastApiTypes';
import { RapidDriver } from '../../models/rapidApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface DriverInfoState {
  driversInfo: RapidDriver[];
}

const initialState = {
  driversInfo: [],
};

const driverinfoReducer = (
  state: DriverInfoState = initialState,
  action: Action,
): DriverInfoState => {
  switch (action.type) {
    case ActionType.FETCH_DRIVERINFO:
      return { driversInfo: [...state.driversInfo, action.payload] };
    default:
      return state;
  }
};

export default driverinfoReducer;
