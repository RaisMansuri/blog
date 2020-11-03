import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from './auth.service';
import {  Router } from '@angular/router';
import { UserService } from './user.service';
import { Title } from '@angular/platform-browser';
import  '../styles.css';
import { environment } from '../environments/environment';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('navbarToggler') navbarToggler:ElementRef;

  title = 'realtime';
  thankmessage = false;
  sendContact = {
    email:"",
    phone:"",
    message:""
  }
  
  cdnHost = environment.cdnHost;

   

  constructor(private dialog: MatDialog, public authService: AuthService,
                      private router: Router,public user: UserService,
                      private titleService: Title) {
                  
                      }
 
                      public setTitle( newTitle: string) {
                      this.titleService.setTitle( newTitle );
                      window.scroll(0, 0);
                    }
                   

  showmessage(){
    this.thankmessage = true;
  }

  scroll(){
    window.scroll(0, 0);
  }

  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }

  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }

  openLoginDialog() {
    if (!this.authService.loggedIn()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.hasBackdrop = true;
      dialogConfig.panelClass = 'dialog-panel';
      this.dialog.closeAll();
      this.dialog.open(LoginDialogComponent, dialogConfig);
    } else {
      this.dialog.closeAll();
      this.router.navigate(['/profile']);
    }

  }



  sendContactForm(){
    this.authService.sendContact(this.sendContact)
    .subscribe(
      res => console.log(res)
    ),
    err => console.log(err)
  }

  

}
