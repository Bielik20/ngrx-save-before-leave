import { State } from './../../@ngrx/reducers/index';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Store, select } from '@ngrx/store';
import * as fromUser from '../../@ngrx/reducers';
import * as UserActions from '../../@ngrx/actions';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<fromUser.State>) {
    this.user$ = store.pipe(select(fromUser.selectCurrentUser));
  }

  update(user: User) {
    this.store.dispatch(new UserActions.UpdateUser(user));
  }

  ngOnInit() {}
}
