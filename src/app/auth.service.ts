import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { RegisterComponent } from './register/register.component';

import { environment } from './../environments/environment';

const hosturl = environment.hosturl;

// const hosturl = "https://api.careernaksha.com";
//const hosturl = "http://localhost:3000";
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public socialdata = {
    name: "",
    email: "",
    phone: "",
  }
  //api.careernaksha.com
  //hidden-river-33306.herokuapp.com

  private _registerUrl = hosturl+"/api/register";
  private _loginUrl = hosturl+"/api/login";
  private savebasic = hosturl+"/api/updateuser/basic";
  private savepersonal = hosturl+"/api/updateuser/personal";
  private saveeducational = hosturl+"/api/updateuser/educational";
  private saveprofessional = hosturl+"/api/updateuser/professional";
  private saveinterest = hosturl+"/api/updateuser/interest";
  private savelifestyle = hosturl+"/api/updateuser/lifestyle";
  private formdetails = hosturl+"/api/formdetails";
  private getfiles = hosturl+"/api/getfiles";
  private mailUrl = hosturl+"/api/sendMail";
  private sendContactUrl = hosturl+"/api/sendContact";
  private registerUrlSocial = hosturl+"/api/registerUserSocial";
  private appoUrl = hosturl+"/api/sendAppoData";
  private reportUrl = hosturl+"/api/report";
  private infoUrl = hosturl+"/api/getuserinfo";
  private knowUrl = hosturl+"/api/know";
  private registerUrl = hosturl+"/api/register";
  private _recoverpwd = hosturl+"/api/recoverpwd";
  private _resetpwd = hosturl+"/api/resetpwd/:link";


  






  constructor(private http: HttpClient,
    private _router: Router, public afAuth: AngularFireAuth) { }

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
          this.socialdata.name = res.user.displayName;
          this.socialdata.email = res.user.email;
          this.socialdata.phone = res.user.phoneNumber;
          this.sendMail(this.socialdata)
            .subscribe(
              res => console.log(res)
            ),
            err => console.log(err);
          console.log(res.user.displayName);


        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }

  doFacebookLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.FacebookAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);

          this.socialdata.name = res.user.displayName;
          this.socialdata.email = res.user.email;
          this.socialdata.phone = res.user.phoneNumber;
          this.sendMail(this.socialdata)
            .subscribe(
              res => console.log(res)
            ),
            err => console.log(err);
          console.log(res.user.displayName);
        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }


  doTwitterLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.TwitterAuthProvider();
      this.afAuth.auth
        .signInWithPopup(provider)
        .then(res => {
          resolve(res);
          this.socialdata.name = res.user.displayName;
          this.socialdata.email = res.user.email;
          this.socialdata.phone = res.user.phoneNumber;
          this.sendMail(this.socialdata)
            .subscribe(
              res => console.log(res)
            ),
            err => console.log(err);
          console.log(res.user.displayName);
          console.log(res.user);



        }, err => {
          console.log(err);
          reject(err);
        });
    });
  }




  sendReport(data) {
    return this.http.post<any>(this.reportUrl, data)
  }


  sendMail(data) {
    return this.http.post<any>(this.mailUrl, data)
  }

  getInfo(data) {
    return this.http.post<any>(this.infoUrl, data)
  }

  sendAppoData(data) {
    return this.http.post<any>(this.appoUrl, data)
  }

  sendContact(data) {
    return this.http.post<any>(this.sendContactUrl, data)
  }


  knowData(data) {
    return this.http.post<any>(this.knowUrl, data)
  }

  saveBasic(data) {
    return this.http.post<any>(this.savebasic, data)
  }

  savePersonal(data) {
    return this.http.post<any>(this.savepersonal, data)
  }

  saveEducational(data) {
    return this.http.post<any>(this.saveeducational, data)
  }

  saveProfessional(data) {
    return this.http.post<any>(this.saveprofessional, data)
  }

  saveInterest(data) {
    return this.http.post<any>(this.saveinterest, data)
  }

  saveLifestyle(data) {
    return this.http.post<any>(this.savelifestyle, data)
  }



  formDetails(data) {
    return this.http.post<any>(this.formdetails, data)
  }



  getFiles(data) {
    return this.http.post<any>(this.getfiles, data)
  }


  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }


  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  recoverpwd(user){
      return this.http.post<any>(this._recoverpwd,user)
  }

  resetpwd(user){
      return this.http.put<any>(this._resetpwd,user)
  }  
    
  registerUserSocial(user) {
    return this.http.post<any>(this.registerUrlSocial, user)
  }

  register(user) {
    return this.http.post<any>(this.registerUrl, user)
  }


  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    this._router.navigate(['/homepage'])
    localStorage.removeItem('token');
    localStorage.removeItem('social-name');

  }

}
