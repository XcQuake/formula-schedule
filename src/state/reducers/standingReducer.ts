import { StandingList } from '../../models/apiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface StandingState {
  loading: boolean;
  error: string | null;
  standingList: StandingList | null;
}

const initialState = {
  loading: false,
  error: null,
  standingList: null,
};

const standingReducer = (
  state: StandingState = initialState,
  action: Action,
): StandingState => {
  switch (action.type) {
    case ActionType.FETCH_STANDING:
      return { loading: true, error: null, standingList: null };
    case ActionType.FETCH_STANDING_SUCCESS:
      return { loading: false, error: null, standingList: action.payload };
    case ActionType.FETCH_STANDING_ERROR:
      return { loading: false, error: action.payload, standingList: null };
    default:
      return state;
  }
};

export default standingReducer;
