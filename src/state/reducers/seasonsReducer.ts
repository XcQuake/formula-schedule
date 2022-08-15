import { Season } from '../../models/ergastApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface SeasonsState {
  seasons: Season[];
}

const initialState = {
  seasons: [],
};

const seasonsReducer = (
  state: SeasonsState = initialState,
  action: Action,
): SeasonsState => {
  switch (action.type) {
    case ActionType.FETCH_SEASONS:
      return { seasons: action.payload };
    default: return state;
  }
};

export default seasonsReducer;
