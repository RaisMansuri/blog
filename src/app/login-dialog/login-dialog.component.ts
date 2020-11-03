import { Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef, MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import * as jwt_decode from "jwt-decode";
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';
import { RecoverpwdDialogComponent } from '../recoverpwd-dialog/recoverpwd-dialog.component';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
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

  showError = false
  errorMsg=""
  constructor(private dialog: MatDialog, public dialogRef: MatDialogRef<LoginDialogComponent>,
              private _router: Router,private _auth: AuthService,private titleService: Title) { }

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
      this.dialogRef.close();
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
      this.dialogRef.close();
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
      this.dialogRef.close();
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
        this.dialogRef.close();
        localStorage.setItem('token', res.token);
        this.id =  this.getDecodedAccessToken(localStorage.getItem('token')).subject;
          console.log(res);
         console.log(this.id);
         this.setTitle('Create | Build | Transform | Enhance | Profile | Resume | CareerNaksha');
        this._router.navigate(['/profile'])
      },
      err => {
        this.errorMsg = err.error;
        console.log(this.errorMsg);
        this.showError = true;
      }
    ) 
  }


  openLoginDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(RegisterDialogComponent, dialogConfig);
  } 

  

  openRegisterDialog() {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(RegisterDialogComponent, dialogConfig);
    
  } 


  openRecoverpwdDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(RecoverpwdDialogComponent, dialogConfig);
  } 
}
