import {
  ActionReducer,
  ActionReducerMap,
  Action,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRoot from '../../../@ngrx/reducers';
import { User } from '../../models/user';
import { UserActionsUnion, UserActionTypes } from '../actions';

export interface UserState {
  current: User;
}

export const initialState: User = {
  id: 1,
  name: 'Ned',
  address: 'Winterfell',
  gender: 'Male'
};

export interface State extends fromRoot.State {
  user: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  current: userReducer
};

export function userReducer(state: User = initialState, action: UserActionsUnion): User {
  switch (action.type) {
    case UserActionTypes.Update: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectCurrentUser = createSelector(
  selectUserState,
  (state: UserState) => state.current
);
