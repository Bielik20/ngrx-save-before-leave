import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { AngularModule } from '../shared/angular.module';
import { CollectionEffects } from './@ngrx/effects/collection';
import { UserEffects } from './@ngrx/effects/user';
import { reducers } from './@ngrx/reducers';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserCollectionComponent } from './containers/user-collection/user-collection.component';
import { UserEditComponent } from './containers/user-edit/user-edit.component';
import { UserComponent } from './containers/user/user.component';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    AngularModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user', reducers),
    EffectsModule.forFeature([UserEffects, CollectionEffects])
  ],
  declarations: [UserFormComponent, UserEditComponent, UserComponent, UserCollectionComponent, UserTableComponent]
})
export class UserModule {}
