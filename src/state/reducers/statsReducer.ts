import React from 'react';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface StatsState {
  content: React.ReactNode | null,
}

const statsReducer = (
  state: StatsState = {
    content: null,
  },
  action: Action,
): StatsState => {
  switch (action.type) {
    case ActionType.TRANSFER_CONTENT:
      return { content: action.payload };
    default:
      return state;
  }
};

export default statsReducer;
