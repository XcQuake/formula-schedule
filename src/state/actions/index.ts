import { ActionType } from '../action-types';
import { DriverStandingData, RaceData } from '../../models/apiTypes';

export const foo = 'foo';

interface FetchStandingAction {
  type: ActionType.FETCH_STANDING;
}

interface FetchStandingSuccessAction {
  type: ActionType.FETCH_STANDING_SUCCESS;
  payload: DriverStandingData[];
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
  payload: RaceData[],
}

interface FetchScheduleErrorAction {
  type: ActionType.FETCH_SCHEDULE_ERROR;
  payload: string,
}

export type Action =
  | FetchStandingAction
  | FetchStandingSuccessAction
  | FetchStandingErrorAction
  | FetchScheduleAction
  | FetchScheduleSuccessAction
  | FetchScheduleErrorAction;
