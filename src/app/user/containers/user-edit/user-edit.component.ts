import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, filter, map, withLatestFrom } from 'rxjs/operators';
import * as UserActions from '../../@ngrx/actions/user';
import * as fromUser from '../../@ngrx/reducers';
import { User } from '../../models/user';

// TODO: Write Tests

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {
  user$: Observable<User>;
  userPending$: Observable<boolean>;
  userDirty$: Observable<boolean>;
  userForm: FormGroup;
  liteSubs: Subscription[] = [];
  heavySubs: Subscription[] = [];

  constructor(
    private store: Store<fromUser.State>,
    private route: ActivatedRoute,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.createStreams();
    this.createForm();
    this.heavySubs.push(this.createRouteSub());
    this.resetLiteSubs();
  }

  ngOnDestroy() {
    this.liteSubs.forEach(element => element.unsubscribe());
    this.heavySubs.forEach(element => element.unsubscribe());
  }

  createStreams() {
    this.user$ = this.store.pipe(select(fromUser.getSelectedUser));
    this.userPending$ = this.store.pipe(select(fromUser.selectUserPending));
    this.userDirty$ = this.store.pipe(select(fromUser.selectUserDirty));
  }

  createForm() {
    this.userForm = this.fb.group({
      id: 0,
      name: '',
      address: '',
      gender: ''
    });
  }

  createRouteSub(): Subscription {
    return this.route.params
      .pipe(map(params => new UserActions.SelectUser(+params.id)))
      .subscribe(this.store);
  }

  createDirtySub(): Subscription {
    return this.userForm.valueChanges.pipe(
      withLatestFrom(this.userDirty$),
      map(([user, dirty]) => dirty),
      filter(dirty => !dirty)
    )
      .subscribe(() => this.store.dispatch(new UserActions.MarkDirty()));
  }

  createValueSub(): Subscription {
    return this.userForm.valueChanges
      .pipe(debounceTime(3000))
      .subscribe(user => {
        this.store.dispatch(new UserActions.UpdateUser(user));
      });
  }

  resetLiteSubs() {
    this.liteSubs.forEach(element => element.unsubscribe());
    this.liteSubs = [];
    this.liteSubs.push(this.createDirtySub());
    this.liteSubs.push(this.createValueSub());
  }
}
