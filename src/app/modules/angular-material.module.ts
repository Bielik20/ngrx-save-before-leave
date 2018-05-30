import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [CommonModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule],
  declarations: []
})
export class AngularMaterialModule {}
