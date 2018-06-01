import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map, withLatestFrom } from 'rxjs/operators';
import * as UserActions from '../../@ngrx/actions';
import * as fromUser from '../../@ngrx/reducers';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  userPending$: Observable<boolean>;
  userDirty$: Observable<boolean>;
  userForm: FormGroup;

  subscriptions: Subscription[] = [];

  constructor(private store: Store<fromUser.State>, private formBuilder: FormBuilder) {
    this.user$ = store.pipe(select(fromUser.selectCurrentUser));
    this.userPending$ = store.pipe(select(fromUser.selectUserPending));
    this.userDirty$ = store.pipe(select(fromUser.selectUserDirty));
    this.userForm = formBuilder.group({
      id: 0,
      name: '',
      address: '',
      gender: ''
    });
  }

  ngOnInit() {
    this.subscriptions.push(this.createDirtySubscription());
    this.subscriptions.push(this.createValueSubscription());
  }

  ngOnDestroy() {
    this.subscriptions.forEach(element => {
      element.unsubscribe();
    });
  }

  createDirtySubscription(): Subscription {
    return this.userForm.valueChanges.pipe(
      withLatestFrom(this.userDirty$),
      map(([user, dirty]) => dirty),
      filter(dirty => !dirty)
    )
      .subscribe(() => this.store.dispatch(new UserActions.MarkDirty()));
  }

  createValueSubscription(): Subscription {
    return this.userForm.valueChanges.pipe(
      debounceTime(5000)
    )
      .subscribe(user => {
        this.store.dispatch(new UserActions.UpdateUser(user));
      });
  }
}
