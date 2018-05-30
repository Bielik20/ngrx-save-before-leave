import { User } from '../../models/user';
import { UserActionsUnion, UserActionTypes } from '../actions';

export interface State {
  user: User;
  pending: boolean;
  dirty: boolean;
}

export const initialState: State = {
  user: {
    id: 1,
    name: 'Ned',
    address: 'Winterfell',
    gender: 'Male'
  },
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
      return { ...state, pending: true, dirty: false };
    }
    case UserActionTypes.Success: {
      return { ...state, user: action.payload, pending: false };
    }
    default: {
      return state;
    }
  }
}
