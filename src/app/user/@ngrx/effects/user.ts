import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../../user.service';
import { UpdateUser, UpdateUserFromGuard, UpdateUserSuccess, UserActionTypes } from '../actions/user';

@Injectable()
export class UserEffects {
  @Effect()
  updateDb$ = this.actions$.pipe(
    ofType<UpdateUser | UpdateUserFromGuard>(
      UserActionTypes.Update,
      UserActionTypes.UpdateFromGuard
    ),
    map(action => action.payload),
    switchMap(user => this.service.updateOne(user).pipe(
      map(() => new UpdateUserSuccess(user))
    ))
  );

  constructor(private actions$: Actions, private service: UserService) {}
}
