import { HelpComponent } from './containers/help/help.component';
import { UserPageComponent } from './user/containers/user-page/user-page.component';
import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AngularMaterialModule } from './shared/angular-material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './@ngrx/reducers';
import { UserFormComponent } from './user/components/user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { AngularModule } from './shared/angular.module';

@NgModule({
  declarations: [AppComponent, HelpComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AngularModule,
    StoreModule.forRoot(reducers),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
