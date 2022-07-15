import { DriverStandingData } from '../../models/apiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface DriversStandingState {
  loading: boolean;
  error: string | null;
  standing: DriverStandingData[];
}

const initialState = {
  loading: false,
  error: null,
  standing: [],
};

const driversStandingReducer = (
  state: DriversStandingState = initialState,
  action: Action,
): DriversStandingState => {
  switch (action.type) {
    case ActionType.FETCH_STANDING:
      return { loading: true, error: null, standing: [] };
    case ActionType.FETCH_STANDING_SUCCESS:
      return { loading: false, error: null, standing: action.payload };
    case ActionType.FETCH_STANDING_ERROR:
      return { loading: false, error: action.payload, standing: [] };
    default:
      return state;
  }
};

export default driversStandingReducer;
