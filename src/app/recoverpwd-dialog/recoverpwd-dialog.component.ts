import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';

@Component({
  selector: 'app-recoverpwd-dialog',
  templateUrl: './recoverpwd-dialog.component.html',
  styleUrls: ['./recoverpwd-dialog.component.css']
})
export class RecoverpwdDialogComponent implements OnInit {

  cdnHost = environment.cdnHost;

  recoveryEmail = {
    email:""
  }
  message: string;

  constructor(private dialog: MatDialog,private _auth: AuthService) { }

  ngOnInit(): void {
  }

  openLoginDialog() {
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(LoginDialogComponent, dialogConfig);
  }

  recoverpwd(){
    this.message="Reset link sent to your mail ID"
    this._auth.recoverpwd(this.recoveryEmail).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }
}
