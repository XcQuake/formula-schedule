import React from 'react';

import { ActionType } from '../action-types';
import {
  Race,
  Result,
  Driver,
  Season,
  QualifyingResult,
  DriverStanding,
  ConstructorStanding,
} from '../../models/ergastApiTypes';
import {
  RapidDriver,
} from '../../models/rapidApiTypes';

export interface FetchStandingAction {
  type: ActionType.FETCH_STANDING;
}

export interface FetchStandingSuccessAction {
  type: ActionType.FETCH_STANDING_SUCCESS;
  payload: {
    drivers: DriverStanding[];
    constructors: ConstructorStanding[];
  };
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

export interface FetchRaceResult {
  type: ActionType.FETCH_RESULT_RACE;
  payload: Result[],
}

export interface FetchQualifyResult {
  type: ActionType.FETCH_RESULT_QUALIFY;
  payload: QualifyingResult[],
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
    title: string,
    option: { name: string, value: string },
  }
}

export interface TransferContentAction {
  type: ActionType.TRANSFER_CONTENT,
  payload: React.ReactNode,
}

export interface OpenErrorPopupAction {
  type: ActionType.OPEN_ERROR_POPUP,
  payload: string | null,
}

export interface CloseErrorPopupAction {
  type: ActionType.CLOSE_ERROR_POPUP,
}

export type Action =
  | FetchStandingAction
  | FetchStandingSuccessAction
  | FetchStandingErrorAction
  | FetchScheduleAction
  | FetchScheduleSuccessAction
  | FetchScheduleErrorAction
  | FetchResultAction
  | FetchRaceResult
  | FetchQualifyResult
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
  | TransferContentAction
  | OpenErrorPopupAction
  | CloseErrorPopupAction;
