import { CanDeactivateGuard } from './guards/can-deactivate-guard.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserPageComponent } from './containers/user-page/user-page.component';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { reducers } from './@ngrx/reducers';
import { AngularModule } from '../shared/angular.module';
import { UserEffects } from './@ngrx/effects';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AngularModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects])
  ],
  declarations: [UserFormComponent, UserPageComponent],
  providers: [CanDeactivateGuard]
})
export class UserModule {}
