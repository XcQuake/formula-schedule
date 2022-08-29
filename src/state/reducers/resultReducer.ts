import { QualifyingResult, Result } from '../../models/ergastApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ResultState {
  resultLoading: boolean;
  resultError: string | null;
  raceResult: Result[] | null;
  qualifyResult: QualifyingResult[] | null;
}

const initialState = {
  resultLoading: false,
  resultError: null,
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
        resultLoading: true,
        resultError: null,
        raceResult: state.raceResult,
        qualifyResult: state.qualifyResult,
      };
    case ActionType.FETCH_RESULT_RACE:
      return {
        resultLoading: false,
        resultError: null,
        raceResult: action.payload,
        qualifyResult: state.qualifyResult,
      };
    case ActionType.FETCH_RESULT_QUALIFY:
      return {
        resultLoading: false,
        resultError: null,
        raceResult: state.raceResult,
        qualifyResult: action.payload,
      };
    case ActionType.FETCH_RESULT_ERROR:
      return {
        resultLoading: false,
        resultError: action.payload,
        raceResult: null,
        qualifyResult: null,
      };
    default:
      return state;
  }
};

export default resultReducer;
