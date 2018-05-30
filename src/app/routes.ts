import { HelpComponent } from './containers/help/help.component';
import { UserPageComponent } from './user/containers/user-page/user-page.component';
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
