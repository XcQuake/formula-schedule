import { Result } from '../../models/ergastApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ResultState {
  resultLoading: boolean;
  resultError: string | null;
  raceResult: Result[] | null;
}

const initialState = {
  resultLoading: false,
  resultError: null,
  raceResult: null,
};

const resultReducer = (
  state: ResultState = initialState,
  action: Action,
): ResultState => {
  switch (action.type) {
    case ActionType.FETCH_RESULT:
      return { resultLoading: true, resultError: null, raceResult: null };
    case ActionType.FETCH_RESULT_SUCCESS:
      return { resultLoading: false, resultError: null, raceResult: action.payload };
    case ActionType.FETCH_RESULT_ERROR:
      return { resultLoading: false, resultError: action.payload, raceResult: null };
    default:
      return state;
  }
};

export default resultReducer;
