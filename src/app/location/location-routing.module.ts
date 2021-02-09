import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AhmedabadComponent } from './ahmedabad/ahmedabad.component';
import { VadodaraComponent } from './vadodara/vadodara.component';
import { AnandComponent } from './anand/anand.component';
import { BharuchComponent } from './bharuch/bharuch.component';
import { SuratComponent } from './surat/surat.component';
import { NadiadComponent } from './nadiad/nadiad.component';
import { BhavnagarComponent } from './bhavnagar/bhavnagar.component';
import { GandhinagarComponent } from './gandhinagar/gandhinagar.component';
import { RajkotComponent } from './rajkot/rajkot.component';
import { AnkleshwarComponent } from './ankleshwar/ankleshwar.component';

export const routes: Routes = [

  { path: 'best-career-counselling-in-ahmedabad-gujarat', component:AhmedabadComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-baroda-vadodara-gujarat', component:VadodaraComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-anand-gujarat', component:AnandComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-bharuch-gujarat', component:BharuchComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-surat-gujarat', component:SuratComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-nadiad-gujarat', component:NadiadComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-Bhavnagar-gujarat', component:BhavnagarComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-gandhinagar-gujarat', component:GandhinagarComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-Rajkot-gujarat', component:RajkotComponent,canActivate: [AuthGuard]},
  { path: 'best-career-counselling-in-ankleshwar-gujarat', component:AnkleshwarComponent,canActivate: [AuthGuard]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
