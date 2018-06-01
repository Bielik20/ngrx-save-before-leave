import { User } from '../../models/user';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  Update = '[User] Update User',
  UpdateFromGuard = '[Can Deactivate] Update User',
  UpdateSuccess = '[User API] Update User Success',
  MarkDirty = '[User] Mark Dirty',
  SelectUser = '[User] Select User',
}

export class UpdateUser implements Action {
  readonly type = UserActionTypes.Update;

  constructor(public payload: User) {}
}

export class UpdateUserFromGuard implements Action {
  readonly type = UserActionTypes.UpdateFromGuard;

  constructor(public payload: User) {}
}

export class MarkDirty implements Action {
  readonly type = UserActionTypes.MarkDirty;
}

export class UpdateUserSuccess implements Action {
  readonly type = UserActionTypes.UpdateSuccess;

  constructor(public payload: User) {}
}

export class SelectUser implements Action {
  readonly type = UserActionTypes.SelectUser;

  constructor(public payload: number) {}
}

export type UserActionsUnion = UpdateUser | UpdateUserFromGuard | UpdateUserSuccess | MarkDirty | SelectUser;
