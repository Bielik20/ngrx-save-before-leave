import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import * as CollectionActions from '../../@ngrx/actions/collection';
import * as fromUser from '../../@ngrx/reducers';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.scss']
})
export class UserCollectionComponent implements OnInit {
  users$: Observable<User[]>;

  constructor(private store: Store<fromUser.State>, private router: Router) {
    this.users$ = store.pipe(select(fromUser.getAllUsers));
  }

  ngOnInit() {
    this.store.dispatch(new CollectionActions.Load());
  }

  navigate(id: number) {
    this.router.navigate([`user/${id}`]);
  }

}
