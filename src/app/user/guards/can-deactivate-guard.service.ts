import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserEditComponent } from '../containers/user-edit/user-edit.component';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../@ngrx/reducers';
import * as UserActions from '../@ngrx/actions/user';
import {map, filter, tap, take} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<UserEditComponent> {
  constructor(private store: Store<fromUser.State>) {}

  canDeactivate(component: UserEditComponent): Observable<boolean> {
    component.resetLiteSubs();
    return this.store.pipe(
      select(fromUser.selectStatusState),
      tap(status => {
        if (status.dirty && !status.pending) {
          this.store.dispatch(new UserActions.UpdateUserFromGuard(component.userForm.value));
        }
      }),
      filter(status => !status.dirty && !status.pending),
      map(() => true),
      take(1)
    );
  }
}
