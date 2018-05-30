import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { UserPageComponent } from '../containers/user-page/user-page.component';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../@ngrx/reducers';
import * as UserActions from '../@ngrx/actions';
import { map, filter, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class CanDeactivateGuard implements CanDeactivate<UserPageComponent> {
  constructor(private store: Store<fromUser.State>) {}

  canDeactivate(component: UserPageComponent): Observable<boolean> {
    return this.store.pipe(
      select(fromUser.selectUserStatus),
      tap(status => {
        if (status.dirty && !status.pending) {
          this.store.dispatch(new UserActions.UpdateUserFromGuard(component.userForm.value));
        }
      }),
      filter(status => !status.dirty && !status.pending),
      map(() => true)
    );
  }
}
