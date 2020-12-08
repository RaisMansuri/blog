import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router} from '@angular/router';
import * as jwt_decode from "jwt-decode";
import { environment } from './../../environments/environment';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  cdnHost = environment.cdnHost;


  id = ""
  loginUserData = {
    email:"",
    password:""
  }

  constructor(private _auth: AuthService,private _router: Router,private meta: Meta, private titleService: Title) { 

    this.meta.updateTag({ name: 'description', content: 'Join and register online at our website to seek career guidance and counselling. You can setup an appointment with our counsellor or expert.' });
    this.setTitle('Register online - offline to get career counselling & guidance | Setup appointment');
    }

  ngOnInit() {
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

  getDecodedAccessToken(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
  }


  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
    
        localStorage.setItem('token', res.token);
        this.id =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
        console.log(res.token);
        console.log(this.id);
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    ) 
  }


  tryTwitterLogin() {
    this._auth.doTwitterLogin()
    .then(res => {
      localStorage.setItem('social-name',res.user.displayName);
    
      this._router.navigate(['/profile']);
      console.log(res);
    }, rej => {

      console.log(rej.message);
    });
  }



  tryGoogleLogin() {
    this._auth.doGoogleLogin()
    .then(res => {
      this._router.navigate(['/profile']);
      localStorage.setItem('social-name',res.user.displayName);
    }, rej => {
      console.log(rej.message);
    });
  }

  tryFacebookLogin() {
    this._auth.doFacebookLogin()
    .then(res => {
      this._router.navigate(['/profile']);
      localStorage.setItem('social-name',res.user.displayName);
      console.log(res);
    }, rej => {

      console.log(rej.message);
    });
  }



}
