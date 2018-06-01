import { HelpComponent } from './containers/help/help.component';
import { UserEditComponent } from './user/containers/user-edit/user-edit.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
  {
    path: 'help',
    component: HelpComponent
  }
];
