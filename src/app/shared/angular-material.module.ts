import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatDividerModule, MatIconModule, MatInputModule, MatOptionModule,
  MatProgressSpinnerModule, MatSelectModule, MatToolbarModule, MatTooltipModule
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
    MatDividerModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  declarations: []
})
export class AngularMaterialModule {}
