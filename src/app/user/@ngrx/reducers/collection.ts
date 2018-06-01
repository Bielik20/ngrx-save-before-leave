import { CollectionActionsUnion, CollectionActionTypes } from '../actions/collection';

export interface State {
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  loaded: false,
  loading: false,
};

export function reducer(
  state: State = initialState,
  action: CollectionActionsUnion
): State {
  switch (action.type) {
    case CollectionActionTypes.Load: {
      return { ...state, loading: true };
    }
    case CollectionActionTypes.LoadSuccess: {
      return { loading: false, loaded: true };
    }
    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;
