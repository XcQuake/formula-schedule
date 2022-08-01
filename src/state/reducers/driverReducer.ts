import { ActionType } from '../action-types';
import { Action } from '../actions';

interface DriverState {
  driverId: string | null;
}

const initialState = {
  driverId: null,
};

const driverReducer = (
  state: DriverState = initialState,
  action: Action,
): DriverState => {
  switch (action.type) {
    case ActionType.SELECT_DRIVER:
      return { driverId: action.payload };
    default:
      return state;
  }
};

export default driverReducer;
