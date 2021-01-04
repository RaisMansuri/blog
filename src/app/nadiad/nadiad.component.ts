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
  selector: 'app-nadiad',
  templateUrl: './nadiad.component.html',
  styleUrls: ['./nadiad.component.css']
})
export class NadiadComponent implements OnInit {

  constructor(private dialog: MatDialog, private authService: AuthService, 
    private router: Router,public user: UserService, private titleService: Title,public meta: Meta) { 

      this.meta.updateTag({ name: 'description', content: 'Get career counselling and career guidance from the best career counsellors in Nadiad. We provide expert services in career path selection and career test.'});
      this.meta.updateTag({ name: 'keywords', content: 'Career counselling Nadiad, best career counselling Nadiad, career guidance Nadiad, best career counsellor in Nadiad, career guidance and counselling' });
      this.setTitle('Career Counselling | Career Guidance | Best Counsellor in Nadiad')
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


