import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  exports: [ReactiveFormsModule],
  declarations: []
})
export class AngularModule {}
