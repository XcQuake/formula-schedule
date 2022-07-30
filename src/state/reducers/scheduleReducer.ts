import { Race } from '../../models/ergastApiTypes';
import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ScheduleState {
  loading: boolean;
  error: string | null;
  schedule: Race[];
}

const initialState = {
  loading: false,
  error: null,
  schedule: [],
};

const scheduleReducer = (
  state: ScheduleState = initialState,
  action: Action,
): ScheduleState => {
  switch (action.type) {
    case ActionType.FETCH_SCHEDULE:
      return { loading: true, error: null, schedule: [] };
    case ActionType.FETCH_SCHEDULE_ERROR:
      return { loading: false, error: action.payload, schedule: [] };
    case ActionType.FETCH_SCHEDULE_SUCCESS:
      return { loading: false, error: null, schedule: action.payload };
    default:
      return state;
  }
};

export default scheduleReducer;
