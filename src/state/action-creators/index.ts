/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';
import formulaApi from '../../requests/formulaApi';

export const fetchStanding = (
  season: string,
  championship: string,
) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.FETCH_STANDING,
  });

  try {
    const response = await formulaApi.getStanding(season, championship);
    console.log(response);
    dispatch({
      type: ActionType.FETCH_STANDING_SUCCESS,
      payload: response,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_STANDING_ERROR,
      payload: err.message,
    });
  }
};

export const fetchSchedule = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.FETCH_SCHEDULE,
  });

  try {
    const response = await formulaApi.getSchedule();
    dispatch({
      type: ActionType.FETCH_SCHEDULE_SUCCESS,
      payload: response,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_SCHEDULE_ERROR,
      payload: err.message,
    });
  }
};
