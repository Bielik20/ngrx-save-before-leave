import { UserActionsUnion, UserActionTypes } from '../actions/user';

export interface State {
  pending: boolean;
  dirty: boolean;
}

export const initialState: State = {
  pending: false,
  dirty: false
};

export function reducer(state: State = initialState, action: UserActionsUnion): State {
  switch (action.type) {
    case UserActionTypes.MarkDirty: {
      return { ...state, dirty: true };
    }
    case UserActionTypes.UpdateFromGuard:
    case UserActionTypes.Update: {
      return { pending: true, dirty: false };
    }
    case UserActionTypes.UpdateSuccess: {
      return { ...state, pending: false };
    }
    default: {
      return state;
    }
  }
}
