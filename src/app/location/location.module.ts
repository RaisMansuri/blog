import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule  } from '@angular/material/dialog';
import { VadodaraComponent } from './vadodara/vadodara.component';
import { AnandComponent } from './anand/anand.component';
import { BharuchComponent } from './bharuch/bharuch.component';
import { SuratComponent } from './surat/surat.component';
import { NadiadComponent } from './nadiad/nadiad.component';
import { BhavnagarComponent } from './bhavnagar/bhavnagar.component';
import { GandhinagarComponent } from './gandhinagar/gandhinagar.component';
import { RajkotComponent } from './rajkot/rajkot.component';
import { AnkleshwarComponent } from './ankleshwar/ankleshwar.component';
import { AhmedabadComponent } from './ahmedabad/ahmedabad.component';
import { LocationRoutingModule } from './location-routing.module';
import { AppComponent } from '../app.component';
@NgModule({
  declarations: [
    AnandComponent,
    BharuchComponent,
    SuratComponent,
    NadiadComponent,
    BhavnagarComponent,
    GandhinagarComponent,
    RajkotComponent,
    AnkleshwarComponent,
    AhmedabadComponent,
    VadodaraComponent,
    AppComponent,

  ],
  imports: [
    CommonModule,
    MatDialogModule,
    LocationRoutingModule,
    
    
  ],
  exports: [
    AnandComponent,
    BharuchComponent,
    SuratComponent,
    NadiadComponent,
    BhavnagarComponent,
    GandhinagarComponent,
    RajkotComponent,
    AnkleshwarComponent,
    AhmedabadComponent,
    VadodaraComponent,
  ],
})
export class LocationModule { }
