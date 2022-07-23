import { ActionType } from '../action-types';
import {
  Race,
  StandingList,
} from '../../models/apiTypes';

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

interface SelectWeekendAction {
  type: ActionType.SELECT_WEEKEND,
  payload: Race,
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

export type Action =
  | FetchStandingAction
  | FetchStandingSuccessAction
  | FetchStandingErrorAction
  | FetchScheduleAction
  | FetchScheduleSuccessAction
  | FetchScheduleErrorAction
  | SelectWeekendAction
  | FetchWikiDataAction
  | FetchWikiDataSuccessAction
  | FetchWikiDataErrorAction;
