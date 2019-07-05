import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T7Component } from './t7/t7.component';
import { T8Component } from './t8/t8.component';
import { T9Component } from './t9/t9.component';

@NgModule({
  declarations: [T7Component, T8Component, T9Component],
  imports: [
    CommonModule
  ],
  exports :[T7Component, T8Component, T9Component]
})
export class Task5Module { }
