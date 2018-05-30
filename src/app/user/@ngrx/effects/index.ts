import {
  debounceTime,
  map,
  switchMap,
  delay,
  catchError,
  take,
  tap,
  distinctUntilChanged
} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { UpdateUser, UserActionTypes, UpdateUserFromGuard, UpdateUserSuccess } from '../actions';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import isEqual from 'lodash/isEqual';

@Injectable()
export class UserEffects {
  @Effect()
  updateDb$ = this.actions$.pipe(
    ofType<UpdateUser | UpdateUserFromGuard>(
      UserActionTypes.Update,
      UserActionTypes.UpdateFromGuard
    ),
    map(action => action.payload),
    // distinctUntilChanged((userX, userY) => {
    //   console.log(isEqual(userX, userY));
    //   return false;
    // }),
    switchMap(user => of(user).pipe(delay(1000), map(userRes => new UpdateUserSuccess(userRes))))
  );

  constructor(private actions$: Actions) {}
}
