import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Race } from '../../models/apiTypes';

const weekendReducer = (
  state: Race | null = null,
  action: Action,
): Race | null => {
  switch (action.type) {
    case ActionType.SELECT_WEEKEND:
      return action.payload;
    default:
      return state;
  }
};

export default weekendReducer;
