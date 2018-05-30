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

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AngularModule,
    RouterModule.forChild([{ path: '', component: UserPageComponent }]),
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([])
  ],
  declarations: [UserFormComponent, UserPageComponent]
})
export class UserModule {}
