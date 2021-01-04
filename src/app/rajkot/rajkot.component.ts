import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import  '../../styles.css';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-rajkot',
  templateUrl: './rajkot.component.html',
  styleUrls: ['./rajkot.component.css']
})
export class RajkotComponent implements OnInit {

  constructor(private dialog: MatDialog, private authService: AuthService, 
    private router: Router,public user: UserService, private titleService: Title,public meta: Meta) { 

      this.meta.updateTag({ name: 'description', content: 'Get career counselling and career guidance from the best career counsellors in Rajkot. We provide expert services in career path selection and career test.'});
      this.meta.updateTag({ name: 'keywords', content: 'Career counselling Rajkot, best career counselling Rajkot, career guidance Rajkot, best career counsellor in Rajkot, career guidance and counselling' });
      this.setTitle('Career Counselling | Career Guidance | Best Counsellor in Rajkot')
    }

  ngOnInit(): void {
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
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
}



