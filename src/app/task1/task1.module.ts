import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T1Component } from './t1/t1.component';

@NgModule({
  declarations: [T1Component],
  imports: [
    CommonModule,
  ],
  exports:[T1Component]
})
export class Task1Module { }
