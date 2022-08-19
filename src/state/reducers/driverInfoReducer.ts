import { RapidDriver } from '../../models/rapidApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface DriverInfoState {
  driverInfoLoading: boolean;
  driverInfo: RapidDriver | null;
  driverInfoError: string | null;
}

const initialState = {
  driverInfoLoading: false,
  driverInfo: null,
  driverInfoError: null,
};

const driverinfoReducer = (
  state: DriverInfoState = initialState,
  action: Action,
): DriverInfoState => {
  switch (action.type) {
    case ActionType.FETCH_DRIVERINFO:
      return { driverInfoLoading: true, driverInfo: null, driverInfoError: null };
    case ActionType.FETCH_DRIVERINFO_SUCCESS:
      return {
        driverInfoLoading: false,
        driverInfo: action.payload,
        driverInfoError: null,
      };
    case ActionType.FETCH_DRIVERINFO_ERROR:
      return {
        driverInfoLoading: false,
        driverInfo: null,
        driverInfoError: action.payload,
      };
    default:
      return state;
  }
};

export default driverinfoReducer;
