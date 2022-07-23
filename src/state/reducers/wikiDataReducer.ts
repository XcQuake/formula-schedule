import { ActionType } from '../action-types';
import { Action } from '../actions';

interface wikiDataState {
  loading: boolean;
  wikiData: {
    imgSource: string,
  } | null;
  error: string | null;
}

const initialState = {
  loading: false,
  wikiData: null,
  error: null,
};

const wikiDataReducer = (
  state: wikiDataState = initialState,
  action: Action,
): wikiDataState => {
  switch (action.type) {
    case ActionType.FETCH_WIKIDATA:
      return { loading: true, wikiData: null, error: null };
    case ActionType.FETCH_WIKIDATA_SUCCESS:
      return { loading: false, wikiData: action.payload, error: null };
    case ActionType.FETCH_WIKIDATA_ERROR:
      return { loading: false, wikiData: null, error: action.payload };
    default: return state;
  }
};

export default wikiDataReducer;
