import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { T10Component } from './t10/t10.component';
import { T11Component } from './t11/t11.component';
import { T12Component } from './t12/t12.component';

@NgModule({
  declarations: [T10Component, T11Component, T12Component],
  imports: [
    CommonModule
  ],
  exports :[T10Component, T11Component, T12Component]
})
export class Task6Module { }
