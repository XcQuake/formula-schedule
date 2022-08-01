import { Driver } from '../../models/ergastApiTypes';
import { RapidDriver } from '../../models/rapidApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface DriverInfoState {
  driverInfoLoading: boolean;
  driverInfoError: string | null;
  driverInfo: RapidDriver | null;
}

const initialState = {
  driverInfoLoading: false,
  driverInfoError: null,
  driverInfo: null,
};

const driverinfoReducer = (
  state: DriverInfoState = initialState,
  action: Action,
): DriverInfoState => {
  switch (action.type) {
    case ActionType.FETCH_DRIVER:
      return {
        driverInfoLoading: true,
        driverInfoError: null,
        driverInfo: null,
      };
    case ActionType.FETCH_DRIVER_ERROR:
      return {
        driverInfoLoading: false,
        driverInfoError: action.payload,
        driverInfo: null,
      };
    case ActionType.FETCH_DRIVER_SUCCESS:
      return {
        driverInfoLoading: false,
        driverInfoError: null,
        driverInfo: action.payload,
      };
    default:
      return state;
  }
};

export default driverinfoReducer;
