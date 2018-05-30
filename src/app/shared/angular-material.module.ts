import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatDividerModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: []
})
export class AngularMaterialModule {}
