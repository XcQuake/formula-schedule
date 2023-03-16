import { QualifyingResult, Result } from '../../models/ergastApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ResultState {
  loading: boolean;
  error: string | null;
  raceResult: Result[] | null;
  qualifyResult: QualifyingResult[] | null;
}

const initialState = {
  loading: false,
  error: null,
  raceResult: null,
  qualifyResult: null,
};

const resultReducer = (
  state: ResultState = initialState,
  action: Action,
): ResultState => {
  switch (action.type) {
    case ActionType.FETCH_RESULT:
      return {
        loading: true,
        error: null,
        raceResult: null,
        qualifyResult: null,
      };
    case ActionType.FETCH_RESULT_SUCCESS:
      return {
        loading: false,
        error: null,
        raceResult: action.payload.race,
        qualifyResult: action.payload.qualify,
      };
    case ActionType.FETCH_RESULT_ERROR:
      return {
        loading: false,
        error: action.payload,
        raceResult: null,
        qualifyResult: null,
      };
    default:
      return state;
  }
};

export default resultReducer;
