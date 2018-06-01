import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import { User } from '../../models/user';
import { UserService } from '../../user.service';
import { CollectionActionTypes, Load, LoadSuccess } from '../actions/collection';

@Injectable()
export class CollectionEffects {
  @Effect()
  load$ = this.actions$.pipe(
    ofType<Load>(CollectionActionTypes.Load),
    switchMap(() => this.service.getAll().pipe(
      map((users: User[]) => new LoadSuccess(users))
    ))
  );

  constructor(private actions$: Actions, private service: UserService) {}
}
