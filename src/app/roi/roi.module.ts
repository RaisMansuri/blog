import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoiRoutingModule } from './roi-routing.module';
import { RoiComponent } from './roi.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RoiRoutingModule,
    FormsModule,
    MatSelectModule,
    
    MatFormFieldModule
  ],
  declarations: [RoiComponent],
  exports:[RoiComponent]
})
export class RoiModule { }

