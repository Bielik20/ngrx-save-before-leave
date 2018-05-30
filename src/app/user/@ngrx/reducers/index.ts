import {
  ActionReducer,
  ActionReducerMap,
  Action,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRoot from '../../../@ngrx/reducers';
import * as fromStatus from './status';
import { User } from '../../models/user';
import { UserActionsUnion, UserActionTypes } from '../actions';

export interface UserState {
  status: fromStatus.State;
}

export interface State extends fromRoot.State {
  user: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  status: fromStatus.reducer
};

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUserStatus = createSelector(selectUserState, (state: UserState) => state.status);

export const selectCurrentUser = createSelector(
  selectUserStatus,
  (status: fromStatus.State) => status.user
);

export const selectUserPending = createSelector(
  selectUserStatus,
  (status: fromStatus.State) => status.pending
);

export const selectUserDirty = createSelector(
  selectUserStatus,
  (status: fromStatus.State) => status.dirty
);
