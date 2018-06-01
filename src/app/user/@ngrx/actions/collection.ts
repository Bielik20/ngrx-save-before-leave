import { User } from '../../models/user';
import { Action } from '@ngrx/store';

export enum CollectionActionTypes {
  Load = '[User Collection] Load',
  LoadSuccess = '[User Collection] Load UpdateSuccess',
}

export class Load implements Action {
  readonly type = CollectionActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = CollectionActionTypes.LoadSuccess;

  constructor(public payload: User[]) {}
}

export type CollectionActionsUnion = Load | LoadSuccess;
