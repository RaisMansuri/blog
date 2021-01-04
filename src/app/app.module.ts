import { BrowserModule, Meta } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule  } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CounterModule } from 'ngx-counter';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HomesearchComponent } from './homesearch/homesearch.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Title }  from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SocialLoginModule, AuthServiceConfig, LinkedinLoginProvider } from 'ng4-social-login';
import { RegistrationComponent } from './registration/registration.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { TestReportComponent } from './test-report/test-report.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SchoolsComponent } from './schools/schools.component';
import { CollegeComponent } from './college/college.component';
import { YouthEventsComponent } from './youth-events/youth-events.component';
import { CareermediaComponent } from './careermedia/careermedia.component';
import { TuformdetailsComponent } from './tuformdetails/tuformdetails.component';
import { TutestComponent } from './tutest/tutest.component';
import { OngoingEventComponent } from './ongoing-event/ongoing-event.component';
import { ProjectdishaComponent } from './projectdisha/projectdisha.component';
import { CareerrojgarComponent } from './careerrojgar/careerrojgar.component';
import { GlobalvidhyaComponent } from './globalvidhya/globalvidhya.component';
import { DishaLTComponent } from './disha-lt/disha-lt.component';
import { ExpertsComponent } from './experts/experts.component';
import { QuizComponent } from './quiz/quiz.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import {CountdownTimerComponent} from './countdown-timer/countdown-timer.component';
import { AhmedabadComponent } from './ahmedabad/ahmedabad.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterModule } from '@angular/router';
import { RecoverpwdDialogComponent } from './recoverpwd-dialog/recoverpwd-dialog.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { VadodaraComponent } from './vadodara/vadodara.component';
import { MarkdownModule } from 'ngx-markdown';
import { RecoverpwdComponent } from './recoverpwd/recoverpwd.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AnandComponent } from './anand/anand.component';
import { BharuchComponent } from './bharuch/bharuch.component';
import { SuratComponent } from './surat/surat.component';
import { NadiadComponent } from './nadiad/nadiad.component';
import { BhavnagarComponent } from './bhavnagar/bhavnagar.component';
import { GandhinagarComponent } from './gandhinagar/gandhinagar.component';
import { RajkotComponent } from './rajkot/rajkot.component';
import { AnkleshwarComponent } from './ankleshwar/ankleshwar.component';
<<<<<<< HEAD
import { AbroadstudyComponent } from './abroadstudy/abroadstudy.component';
=======
>>>>>>> 3e09925dc251ddd6251ab7b2251286f0ae52ce5d


 const config = new AuthServiceConfig([  
  {
    id: LinkedinLoginProvider.PROVIDER_ID,
    provider: new LinkedinLoginProvider("81oekd476atocy")
  }

 ],false);

 export function provideConfig(){
   return config;
 }


  export const firebaseConfig = {
    apiKey: "AIzaSyCe5l2cKBNnHMiEQfeWw_e4RVrn1Wqxnjs",
    authDomain: "careerauth.firebaseapp.com",
    databaseURL: "https://careerauth.firebaseio.com",
    projectId: "careerauth",
    storageBucket: "",
    messagingSenderId: "866897014050"
  };
 
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductsComponent,
    RegisterComponent,
    LoginComponent,
    ThankyouComponent,
    BlogComponent,
    HomesearchComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
    RegistrationComponent,
    AboutComponent,
    TestReportComponent,
    BookComponent,
    PrivacyComponent,
    GalleryComponent,
    SchoolsComponent,
    CollegeComponent,
    YouthEventsComponent,
    CareermediaComponent,
    TuformdetailsComponent,
    TutestComponent,
    OngoingEventComponent,
    ProjectdishaComponent,
    CareerrojgarComponent,
    GlobalvidhyaComponent,
    DishaLTComponent,
    ExpertsComponent,
    AbroadstudyComponent,
    QuizComponent,
    CountdownTimerComponent,
    AhmedabadComponent,
    BlogsComponent,
    RecoverpwdDialogComponent,
    ResetpwdComponent,
    VadodaraComponent,
    RecoverpwdComponent,
    AnandComponent,
    BharuchComponent,
    SuratComponent,
    NadiadComponent,
    BhavnagarComponent,
    GandhinagarComponent,
    RajkotComponent,
    AnkleshwarComponent
   
  ],
  
    entryComponents: [
        LoginDialogComponent,
        RegisterDialogComponent,
        BookComponent,
        RecoverpwdDialogComponent,
    ],
 

  imports: [
    ToastrModule.forRoot(),
    MarkdownModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    CounterModule.forRoot(),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    SocialLoginModule,
    NgxPaginationModule
    
    
  ],
  providers: [AuthService,AuthGuard,Title,Meta,{provide: AuthServiceConfig, useFactory: provideConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
