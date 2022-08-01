import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Race } from '../../models/ergastApiTypes';

interface WeekendState {
  weekend: Race | null;
}

const initialState = {
  weekend: null,
};

const weekendReducer = (
  state: WeekendState = initialState,
  action: Action,
): WeekendState => {
  switch (action.type) {
    case ActionType.SELECT_WEEKEND:
      return { weekend: action.payload };
    default:
      return state;
  }
};

export default weekendReducer;
