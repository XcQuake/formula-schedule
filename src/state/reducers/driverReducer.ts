import { RapidDriver } from '../../models/rapidApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ScheduleState {
  driverLoading: boolean;
  driverError: string | null;
  driverInfo: RapidDriver | null;
}

const initialState = {
  driverLoading: false,
  driverError: null,
  driverInfo: null,
};

const driverReducer = (
  state: ScheduleState = initialState,
  action: Action,
): ScheduleState => {
  switch (action.type) {
    case ActionType.FETCH_DRIVER:
      return { driverLoading: true, driverError: null, driverInfo: null };
    case ActionType.FETCH_DRIVER_ERROR:
      return { driverLoading: false, driverError: action.payload, driverInfo: null };
    case ActionType.FETCH_DRIVER_SUCCESS:
      return { driverLoading: false, driverError: null, driverInfo: action.payload };
    default:
      return state;
  }
};

export default driverReducer;
