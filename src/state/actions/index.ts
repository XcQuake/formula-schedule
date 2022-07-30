import React from 'react';

import { ActionType } from '../action-types';
import {
  Race,
  StandingList,
  Result,
} from '../../models/ergastApiTypes';

export const foo = 'foo';

interface FetchStandingAction {
  type: ActionType.FETCH_STANDING;
}

interface FetchStandingSuccessAction {
  type: ActionType.FETCH_STANDING_SUCCESS;
  payload: StandingList;
}

interface FetchStandingErrorAction {
  type: ActionType.FETCH_STANDING_ERROR;
  payload: string;
}

interface FetchScheduleAction {
  type: ActionType.FETCH_SCHEDULE;
}

interface FetchScheduleSuccessAction {
  type: ActionType.FETCH_SCHEDULE_SUCCESS;
  payload: Race[],
}

interface FetchScheduleErrorAction {
  type: ActionType.FETCH_SCHEDULE_ERROR;
  payload: string,
}

interface FetchResultAction {
  type: ActionType.FETCH_RESULT;
}

interface FetchResultSuccessAction {
  type: ActionType.FETCH_RESULT_SUCCESS;
  payload: Result[],
}

interface FetchResultErrorAction {
  type: ActionType.FETCH_RESULT_ERROR,
  payload: string,
}

interface FetchWikiDataAction {
  type: ActionType.FETCH_WIKIDATA,
}

interface FetchWikiDataSuccessAction {
  type: ActionType.FETCH_WIKIDATA_SUCCESS,
  payload: {
    imgSource: string,
  }
}

interface FetchWikiDataErrorAction {
  type: ActionType.FETCH_WIKIDATA_ERROR,
  payload: string,
}

interface SelectWeekendAction {
  type: ActionType.SELECT_WEEKEND,
  payload: Race,
}

interface OpenPopup {
  type: ActionType.OPEN_POPUP,
  payload: React.ReactNode,
}

interface ClosePopup {
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
  | SelectWeekendAction
  | FetchWikiDataAction
  | FetchWikiDataSuccessAction
  | FetchWikiDataErrorAction
  | OpenPopup
  | ClosePopup;
