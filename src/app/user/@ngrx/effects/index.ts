import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { delay, map, switchMap } from 'rxjs/operators';
import { UpdateUser, UpdateUserFromGuard, UpdateUserSuccess, UserActionTypes } from '../actions';

@Injectable()
export class UserEffects {
  @Effect()
  updateDb$ = this.actions$.pipe(
    ofType<UpdateUser | UpdateUserFromGuard>(
      UserActionTypes.Update,
      UserActionTypes.UpdateFromGuard
    ),
    map(action => action.payload),
    switchMap(user => of(user).pipe(delay(1000), map(userRes => new UpdateUserSuccess(userRes))))
  );

  constructor(private actions$: Actions) {}
}
