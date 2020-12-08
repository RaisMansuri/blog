import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';
import * as jwt_decode from "jwt-decode";
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  cdnHost = environment.cdnHost;


  id = ""
  loginUserData = {
    email:"",
    password:""
  }
  sociallogindata = {
    name:"",
    email:"",
    phone:""
  }


  constructor(private _router: Router,private _auth: AuthService, private titleService: Title, private meta:Meta) { 
 
    this.meta.updateTag({ name: 'description', content: 'Login to your career dashboard to build your profile and connect with the best mentor in your city'});
    this.setTitle('Login to your career dashboard | Sign up');

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

  tryGoogleLogin() {
    this._auth.doGoogleLogin()
    .then(res => {
      localStorage.setItem('social-name',res.user.displayName);
      this.sociallogindata.name = res.user.displayName;
      this.sociallogindata.email = res.user.email;
      this.sociallogindata.phone = res.user.phone;
      this._auth.registerUserSocial(this.sociallogindata)
      .subscribe(
        res => {
          localStorage.setItem('token',res.token);
          this.setTitle('Create | Build | Transform | Enhance | Profile | Resume | CareerNaksha');
          this._router.navigate(['/profile']);
        }
        
      )
      
    }, rej => {
      console.log(rej.message);
    });
  }

  tryFacebookLogin() {
    this._auth.doFacebookLogin()
    .then(res => {
      localStorage.setItem('social-name',res.user.displayName);
      this.sociallogindata.name = res.user.displayName;
      this.sociallogindata.email = res.user.email;
      this.sociallogindata.phone = res.user.phone;
      this._auth.registerUserSocial(this.sociallogindata)
      .subscribe(
        res => {
          localStorage.setItem('token',res.token);
          this.setTitle('Create | Build | Transform | Enhance | Profile | Resume | CareerNaksha');
          this._router.navigate(['/profile']);
        }
      )
      
      console.log(res);
    }, rej => {

      console.log(rej.message);
    });
  }

  tryTwitterLogin() {
    this._auth.doTwitterLogin()
    .then(res => {
      localStorage.setItem('social-name',res.user.displayName);
      this.sociallogindata.name = res.user.displayName;
      this.sociallogindata.email = res.user.email;
      this.sociallogindata.phone = res.user.phone;
      this._auth.registerUserSocial(this.sociallogindata)
      .subscribe(
        res => {
          localStorage.setItem('token',res.token);
          this.setTitle('Create | Build | Transform | Enhance | Profile | Resume | CareerNaksha');
          this._router.navigate(['/profile']);
        }
        
      )
      console.log(res);
    }, rej => {

      console.log(rej.message);
    });
  }

  
  
  loginUser () {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
    
        localStorage.setItem('token', res.token)
        this.id =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
        console.log(res.token);
        console.log(this.id);
        this._router.navigate(['/profile'])
      },
      err => console.log(err)
    ) 
  }

}
