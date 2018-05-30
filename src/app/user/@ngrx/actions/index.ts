import { User } from './../../models/user';
import { Action } from '@ngrx/store';

export enum UserActionTypes {
  Update = '[User Page] Update User',
  UpdateFromGuard = '[Can Deactivate] Update User',
  Success = '[User API] Update User Success',
  MarkDirty = '[User Page] Mark Dirty'
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
  readonly type = UserActionTypes.Success;

  constructor(public payload: User) {}
}

export type UserActionsUnion = UpdateUser | UpdateUserFromGuard | UpdateUserSuccess | MarkDirty;
