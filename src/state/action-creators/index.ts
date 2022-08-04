import React from 'react';
import { Dispatch } from 'redux';

import * as wikiApi from '../../requests/wikiApi';
import { ActionType } from '../action-types';
import {
  Action,
  ClosePopupAction,
  OpenPopupAction,
  SelectDriverAction,
  SelectWeekendAction,
} from '../actions';
import formulaApi from '../../requests/ergastApi';
import { Race, Driver } from '../../models/ergastApiTypes';
import rapidApi from '../../requests/rapidApi';

export const fetchStanding = (
  season: string,
  championship: string,
) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_STANDING });

  try {
    const response = await formulaApi.getStanding(season, championship);
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

export const fetchRaceResult = (
  season: string,
  round: string,
) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_RESULT });

  try {
    const response = await formulaApi.getRaceResult(season, round);
    dispatch({
      type: ActionType.FETCH_RESULT_SUCCESS,
      payload: response,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_RESULT_ERROR,
      payload: err.message,
    });
  }
};

export const fetchDriverInfo = (
  driverCode: string,
) => async (dispatch: Dispatch<Action>) => {
  const response = await rapidApi.getDriverInfo(driverCode);
  dispatch({
    type: ActionType.FETCH_DRIVERINFO,
    payload: response,
  });
};

export const fetchWikiImage = (
  wikiTitle: string,
) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_WIKI_IMAGE });

  const imgSource = await wikiApi.getImage(wikiTitle);

  dispatch({
    type: ActionType.FETCH_WIKI_IMAGE_SUCCESS,
    payload: imgSource,
  });
};

export const selectWeekend = (weekend: Race): SelectWeekendAction => ({
  type: ActionType.SELECT_WEEKEND,
  payload: weekend,
});

export const selectDriver = (driver: Driver): SelectDriverAction => ({
  type: ActionType.SELECT_DRIVER,
  payload: driver,
});

export const openPopup = (content: React.ReactNode): OpenPopupAction => ({
  type: ActionType.OPEN_POPUP,
  payload: content,
});

export const closePopup = (): ClosePopupAction => ({
  type: ActionType.CLOSE_POPUP,
});
