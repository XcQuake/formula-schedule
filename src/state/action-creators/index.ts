import React from 'react';
import { Dispatch } from 'redux';

import * as wikiApi from '../../requests/wikiApi';
import { ActionType } from '../action-types';
import { Action } from '../actions';
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

export const fetchDriver = (
  driverCode: string,
) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_DRIVER });

  try {
    const response = await rapidApi.getDriverInfo(driverCode);
    dispatch({
      type: ActionType.FETCH_DRIVER_SUCCESS,
      payload: response,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_DRIVER_ERROR,
      payload: err.message,
    });
  }
};

export const fetchWikiData = (
  wikiTitle: string,
) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_WIKIDATA });

  try {
    const imgSource = await wikiApi.getImage(wikiTitle);
    dispatch({
      type: ActionType.FETCH_WIKIDATA_SUCCESS,
      payload: {
        imgSource,
      },
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_WIKIDATA_ERROR,
      payload: err,
    });
  }
};

export const selectElement = (
  element: Race | Driver,
) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.SELECT_ELEMENT,
    payload: element,
  });
};

export const openPopup = (
  content: React.ReactNode,
) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: ActionType.OPEN_POPUP,
    payload: content,
  });
};

export const closePopup = () => (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.CLOSE_POPUP });
};
