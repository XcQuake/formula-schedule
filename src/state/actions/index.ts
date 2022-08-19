import React from 'react';

import { ActionType } from '../action-types';
import {
  Race,
  StandingList,
  Result,
  Driver,
  Season,
} from '../../models/ergastApiTypes';
import {
  RapidDriver,
} from '../../models/rapidApiTypes';

export const foo = 'foo';

export interface FetchStandingAction {
  type: ActionType.FETCH_STANDING;
}

export interface FetchStandingSuccessAction {
  type: ActionType.FETCH_STANDING_SUCCESS;
  payload: StandingList;
}

export interface FetchStandingErrorAction {
  type: ActionType.FETCH_STANDING_ERROR;
  payload: string;
}

export interface FetchScheduleAction {
  type: ActionType.FETCH_SCHEDULE;
}

export interface FetchScheduleSuccessAction {
  type: ActionType.FETCH_SCHEDULE_SUCCESS;
  payload: Race[],
}

export interface FetchScheduleErrorAction {
  type: ActionType.FETCH_SCHEDULE_ERROR;
  payload: string,
}

export interface FetchResultAction {
  type: ActionType.FETCH_RESULT;
}

export interface FetchResultSuccessAction {
  type: ActionType.FETCH_RESULT_SUCCESS;
  payload: Result[],
}

export interface FetchResultErrorAction {
  type: ActionType.FETCH_RESULT_ERROR,
  payload: string,
}

export interface FetchDriverInfoAction {
  type: ActionType.FETCH_DRIVERINFO,
}

export interface FetchDriverInfoSuccessAction {
  type: ActionType.FETCH_DRIVERINFO_SUCCESS,
  payload: RapidDriver,
}

export interface FetchDriverInfoErrorAction {
  type: ActionType.FETCH_DRIVERINFO_ERROR,
  payload: string,
}

export interface FetchWikiImageAction {
  type: ActionType.FETCH_WIKI_IMAGE,
}

export interface FetchWikiImageSuccessAction {
  type: ActionType.FETCH_WIKI_IMAGE_SUCCESS,
  payload: string,
}

export interface FetchSeasons {
  type: ActionType.FETCH_SEASONS,
  payload: Season[],
}

export interface SelectWeekendAction {
  type: ActionType.SELECT_WEEKEND,
  payload: Race,
}

export interface SelectDriverAction {
  type: ActionType.SELECT_DRIVER,
  payload: Driver,
}

export interface SelectDropdownOptionAction {
  type: ActionType.SELECT_DROPDOWN_OPTION,
  payload: {
    name: string,
    option: string,
  }
}

export interface OpenPopupAction {
  type: ActionType.OPEN_POPUP,
  payload: React.ReactNode,
}

export interface ClosePopupAction {
  type: ActionType.CLOSE_POPUP,
}

export type Action =
  | FetchStandingAction
  | FetchStandingSuccessAction
  | FetchStandingErrorAction
  | FetchScheduleAction
  | FetchScheduleSuccessAction
  | FetchScheduleErrorAction
  | FetchResultAction
  | FetchResultSuccessAction
  | FetchResultErrorAction
  | FetchDriverInfoAction
  | FetchDriverInfoSuccessAction
  | FetchDriverInfoErrorAction
  | FetchWikiImageAction
  | FetchWikiImageSuccessAction
  | FetchSeasons
  | SelectWeekendAction
  | SelectDriverAction
  | SelectDropdownOptionAction
  | OpenPopupAction
  | ClosePopupAction;
