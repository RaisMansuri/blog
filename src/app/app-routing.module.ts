import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { TestReportComponent } from './test-report/test-report.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SchoolsComponent } from './schools/schools.component';
import { CollegeComponent } from './college/college.component';
import { YouthEventsComponent } from './youth-events/youth-events.component';
import { CareermediaComponent } from './careermedia/careermedia.component';
import { TuformdetailsComponent } from './tuformdetails/tuformdetails.component';
import { TutestComponent } from './tutest/tutest.component';
import { OngoingEventComponent} from './ongoing-event/ongoing-event.component'; 
import { ProjectdishaComponent } from './projectdisha/projectdisha.component';
import { CareerrojgarComponent } from './careerrojgar/careerrojgar.component';
import { GlobalvidhyaComponent } from './globalvidhya/globalvidhya.component';
import { DishaLTComponent } from './disha-lt/disha-lt.component';
import { ExpertsComponent } from './experts/experts.component';
import { QuizComponent } from './quiz/quiz.component';
import { AuthGuard } from './auth.guard';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
import { AbroadstudyComponent } from './abroadstudy/abroadstudy.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  
  { path: 'register', component: RegisterComponent},
  {
    path: 'location',

    loadChildren: () => import('./location/location.module').then(m => m.LocationModule)
  },
  {
    path: 'profile',

    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)

  },
  { path: 'recoverpwd',component:RecoverpwdComponent},
  { path: 'blogs', component:BlogComponent},
  { path: "blogs/:blog_url", component:BlogsComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'thankyou', component: ThankyouComponent },
  { path: '', component: HomepageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about', component:AboutComponent },
  { path: 'test-report', component:TestReportComponent },
  {
    path: 'roi',

    loadChildren: () => import('./roi/roi.module').then(m => m.RoiModule)

  },
  { path: 'privacy-policy', component:PrivacyComponent },
  { path: 'resetpwd/:token', component:ResetpwdComponent },
  { path: 'gallery', component:GalleryComponent},
  { path: 'gallery/schools', component:SchoolsComponent},
  { path: 'gallery/college', component:CollegeComponent},
  { path: 'gallery/youth-events', component:YouthEventsComponent},
  { path: 'gallery/careermedia', component:CareermediaComponent},
  { path: 'gallery/careerrojgar/job-fair', component:CareerrojgarComponent},
  { path: 'gallery/ongoing-events', component:OngoingEventComponent},
  { path: 'gallery/csr-activities-social-work/project-disha', component:ProjectdishaComponent},
  { path: 'tuformdetails', component:TuformdetailsComponent,canActivate:[AuthGuard]},
  { path: 'tutest', component:TutestComponent},
  { path: 'gallery/event-globalvidhya', component:GlobalvidhyaComponent},
  { path: 'gallery/csr-activities-social-work/project-disha', component:DishaLTComponent},
  { path:'experts', component:ExpertsComponent},
  { path:'globalvidhya', component:AbroadstudyComponent },
  { path:'products/globalvidhya', component:AbroadstudyComponent},
  { path: 'quiz', component:QuizComponent,canActivate:[AuthGuard]},
  {path: '**', redirectTo: ''},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
