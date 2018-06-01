import { Routes } from '@angular/router';
import { UserEditComponent } from './containers/user-edit/user-edit.component';
import { UserComponent } from './containers/user/user.component';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: ':id',
        component: UserEditComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
];
