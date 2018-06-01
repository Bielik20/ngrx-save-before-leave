import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../@ngrx/reducers';
import * as fromStatus from './status';
import * as fromUsers from './users';
import * as fromCollection from './collection';

export interface UserState {
  status: fromStatus.State;
  users: fromUsers.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  user: UserState;
}

export const reducers: ActionReducerMap<UserState> = {
  status: fromStatus.reducer,
  users: fromUsers.reducer,
  collection: fromCollection.reducer,
};

export const selectUserState = createFeatureSelector<UserState>('user');

export const selectStatusState = createSelector(selectUserState, (state: UserState) => state.status);

export const selectUsersState = createSelector(selectUserState, (state: UserState) => state.users);

export const getSelectedUserId = createSelector(
  selectUsersState,
  fromUsers.getSelectedId
);

export const {
  selectIds: getUserIds,
  selectEntities: getUserEntities,
  selectAll: getAllUsers,
  selectTotal: getTotalUsers,
} = fromUsers.adapter.getSelectors(selectUsersState);

export const getSelectedUser = createSelector(
  getUserEntities,
  getSelectedUserId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

export const selectUserPending = createSelector(
  selectStatusState,
  (status: fromStatus.State) => status.pending
);

export const selectUserDirty = createSelector(
  selectStatusState,
  (status: fromStatus.State) => status.dirty
);
