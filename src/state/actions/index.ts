import React from 'react';

import { ActionType } from '../action-types';
import {
  Race,
  Result,
  Driver,
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

export interface FetchResultSuccessAction {
  type: ActionType.FETCH_RESULT_SUCCESS;
  payload: {
    race: Result[],
    qualify: QualifyingResult[],
  },
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
  | SelectWeekendAction
  | SelectDriverAction
  | SelectDropdownOptionAction
  | TransferContentAction;
