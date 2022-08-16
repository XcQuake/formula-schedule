import { ActionType } from '../action-types';
import { SelectDropdownOptionAction } from '../actions';

interface DropdownState {
  [key: string]: string;
}

const intialState = {
  initial: 'initial',
};

const dropdownReducer = (
  state: DropdownState = intialState,
  action: SelectDropdownOptionAction,
): DropdownState => {
  switch (action.type) {
    case ActionType.SELECT_DROPDOWN_OPTION: {
      const { name, option } = action.payload;
      return { ...state, [name]: option };
    }
    default: return state;
  }
};

export default dropdownReducer;
