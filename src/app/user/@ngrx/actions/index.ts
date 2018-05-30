import { User } from './../../models/user';

export enum UserActionTypes {
  Update = '[User Page] Update User'
}

export class UpdateUser {
  readonly type = UserActionTypes.Update;

  constructor(public payload: User) {}
}

export type UserActionsUnion = UpdateUser;
