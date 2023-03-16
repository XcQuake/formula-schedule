import { ConstructorStanding, DriverStanding } from '../../models/ergastApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface StandingState {
  loading: boolean;
  error: string | null;
  drivers: DriverStanding[] | null;
  constructors: ConstructorStanding[] | null;
}

const initialState = {
  loading: false,
  error: null,
  standingList: null,
  drivers: null,
  constructors: null,
};

const standingReducer = (
  state: StandingState = initialState,
  action: Action,
): StandingState => {
  switch (action.type) {
    case ActionType.FETCH_STANDING:
      return { loading: true, error: null, drivers: null, constructors: null };
    case ActionType.FETCH_STANDING_SUCCESS:
      return {
        loading: false,
        error: null,
        drivers: action.payload.drivers,
        constructors: action.payload.constructors,
      };
    case ActionType.FETCH_STANDING_ERROR:
      return {
        loading: false,
        error: action.payload,
        drivers: null,
        constructors: null,
      };
    default:
      return state;
  }
};

export default standingReducer;
