import { ActionType } from '../action-types';
import { Action } from '../actions';

interface wikiDataState {
  wikiImage: string | null;
}

const initialState = {
  wikiImage: null,
};

const wikiDataReducer = (
  state: wikiDataState = initialState,
  action: Action,
): wikiDataState => {
  switch (action.type) {
    case ActionType.FETCH_WIKI_IMAGE:
      return { wikiImage: null };
    case ActionType.FETCH_WIKI_IMAGE_SUCCESS:
      return { wikiImage: action.payload };
    default:
      return state;
  }
};

export default wikiDataReducer;
