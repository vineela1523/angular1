import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
 import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [OneComponent, TwoComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[ OneComponent, TwoComponent ],
  
})
export class Task7Module { }
