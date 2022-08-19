import React from 'react';
import { Dispatch } from 'redux';

import { ActionType } from '../action-types';
import {
  Action,
  ClosePopupAction,
  OpenPopupAction,
  SelectDriverAction,
  SelectDropdownOptionAction,
  SelectWeekendAction,
} from '../actions';
import { Race, Driver } from '../../models/ergastApiTypes';
import ergastApi from '../../requests/ergastApi';
import rapidApi from '../../requests/rapidApi';
import * as wikiApi from '../../requests/wikiApi';

export const fetchStanding = (
  season: string,
  championship: string,
) => async (dispatch: Dispatch<Action>) => {
  dispatch({ type: ActionType.FETCH_STANDING });

  try {
    const response = await ergastApi.getStanding(season, championship);
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
    const response = await ergastApi.getSchedule();
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
    const response = await ergastApi.getRaceResult(season, round);
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
  dispatch({
    type: ActionType.FETCH_DRIVERINFO,
  });
  try {
    const response = await rapidApi.getDriverInfo(driverCode);
    dispatch({
      type: ActionType.FETCH_DRIVERINFO_SUCCESS,
      payload: response,
    });
  } catch (err: any) {
    dispatch({
      type: ActionType.FETCH_DRIVERINFO_ERROR,
      payload: err,
    });
  }
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

export const fetchSeasons = () => async (dispatch: Dispatch<Action>) => {
  const seasons = await ergastApi.getSeasons();

  dispatch({
    type: ActionType.FETCH_SEASONS,
    payload: seasons,
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

export const selectDropdownOption = (
  name: string,
  option: string,
): SelectDropdownOptionAction => ({
  type: ActionType.SELECT_DROPDOWN_OPTION,
  payload: { name, option },
});

export const openPopup = (content: React.ReactNode): OpenPopupAction => ({
  type: ActionType.OPEN_POPUP,
  payload: content,
});

export const closePopup = (): ClosePopupAction => ({
  type: ActionType.CLOSE_POPUP,
});
