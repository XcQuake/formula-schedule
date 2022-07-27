import React from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface PopupState {
  content: React.ReactNode | null,
  isOpen: boolean,
}

const popupReducer = (
  state: PopupState = {
    content: null,
    isOpen: false,
  },
  action: Action,
): PopupState => {
  switch (action.type) {
    case ActionType.OPEN_POPUP:
      return { content: action.payload, isOpen: true };
    case ActionType.CLOSE_POPUP:
      return { content: null, isOpen: false };
    default:
      return state;
  }
};

export default popupReducer;
