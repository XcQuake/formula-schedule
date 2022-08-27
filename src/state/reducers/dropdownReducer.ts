/* eslint-disable no-param-reassign */
import { ActionType } from '../action-types';
import { SelectDropdownOptionAction } from '../actions';

interface DropdownState {
  [key: string]: {
    name: string,
    value: string,
  };
}

const intialState = {
  initial: {
    name: 'initial',
    value: 'initial',
  },
};

const dropdownReducer = (
  state: DropdownState = intialState,
  action: SelectDropdownOptionAction,
): DropdownState => {
  switch (action.type) {
    case ActionType.SELECT_DROPDOWN_OPTION: {
      const { title, option } = action.payload;
      return { ...state, [title]: option };
    }
    default: return state;
  }
};

export default dropdownReducer;
