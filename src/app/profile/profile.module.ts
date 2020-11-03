import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
 
  imports: [
    CommonModule,
    FileUploadModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    MatSelectModule,
    MatFormFieldModule
  ],
  declarations: [ProfileComponent ],
  exports:[ProfileComponent]

})
export class ProfileModule { }


