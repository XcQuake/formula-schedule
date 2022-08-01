import { Driver } from '../../models/ergastApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface DriverState {
  driver: Driver | null;
}

const initialState = {
  driver: null,
};

const driverReducer = (
  state: DriverState = initialState,
  action: Action,
): DriverState => {
  switch (action.type) {
    case ActionType.SELECT_DRIVER:
      return { driver: action.payload };
    default:
      return state;
  }
};

export default driverReducer;
