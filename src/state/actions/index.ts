/* eslint-disable max-len */
// import formulaApi from '../../utils/FormulaApi';
// import { ApiData, RaceData, StandingListData } from '../../models/apiTypes';
// import { Dispatch } from 'react';

// export const fetchDriverStanding = (): any => async (dispatch: Dispatch) => {
//   const response = await formulaApi.getDriverStanding();

//   dispatch({ type: 'FETCH_DRIVER_STANDING', payload: response });
// };

import { ActionType } from '../action-types';
import { DriverStandingData } from '../../models/apiTypes';

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

export type Action =
  | FetchStandingAction
  | FetchStandingSuccessAction
  | FetchStandingErrorAction;
