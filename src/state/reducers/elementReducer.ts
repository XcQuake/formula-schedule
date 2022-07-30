import { ActionType } from '../action-types';
import { Action } from '../actions';
import { Race, Driver } from '../../models/ergastApiTypes';

const elementReducer = (
  state: Race | Driver | null = null,
  action: Action,
): Race | Driver | null => {
  switch (action.type) {
    case ActionType.SELECT_ELEMENT:
      return action.payload;
    default:
      return state;
  }
};

export default elementReducer;
