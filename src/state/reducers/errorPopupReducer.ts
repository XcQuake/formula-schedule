import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ErrorPopupState {
  isOpen: boolean;
  message: string | null;
}

const initialState = {
  isOpen: false,
  message: null,
};

const errorPopupReducer = (
  state: ErrorPopupState = initialState,
  action: Action,
): ErrorPopupState => {
  switch (action.type) {
    case ActionType.OPEN_ERROR_POPUP:
      return { isOpen: true, message: action.payload };
    case ActionType.CLOSE_ERROR_POPUP:
      return { isOpen: false, message: null };
    default: return state;
  }
};

export default errorPopupReducer;
