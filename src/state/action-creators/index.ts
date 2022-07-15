/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import formulaApi from '../../requests/formulaApi';

export const fetchDriverStanding = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.FETCH_STANDING,
  });

  try {
    const response = await formulaApi.getDriverStanding();
    dispatch({
      type: ActionType.FETCH_STANDING_SUCCESS,
      payload: response.DriverStandings,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_STANDING_ERROR,
      payload: err.message,
    });
  }
};
