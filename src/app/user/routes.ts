import { Routes } from '@angular/router';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';

export const routes: Routes = [
  {
    path: '',
    component: UserPageComponent,
    canDeactivate: [CanDeactivateGuard],
    // children: [
    //   {
    //     path: ':id',
    //     component: 'AAA',
    //     resolve: {
    //       question: 'AAA'
    //     }
    //   },
    // ],
  },
];
