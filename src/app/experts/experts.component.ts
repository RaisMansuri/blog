import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BookComponent } from '../book/book.component';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {
  

  cdnHost = environment.cdnHost;

  
  counselorid = "";
  counsellorResponse = [];
  constructor(public authService: AuthService,private dialog: MatDialog,private http:HttpClient) { 
    
  }
  getCounsellors(){
    return this.http.get<any>('https://dashboard.careernaksha.com/counsellors');
}
  ngOnInit() {
    localStorage.removeItem('c_id');
    localStorage.removeItem('c_name');
    this.getCounsellors()
    .subscribe(data => {
      
      this.counsellorResponse = data;
      
    })
    console.log(this.counsellorResponse)
  }
  openBookDialog() {
  
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    dialogConfig.hasBackdrop = true;
    dialogConfig.panelClass = 'dialog-panel';
    this.dialog.closeAll();
    this.dialog.open(BookComponent, dialogConfig);
   

}

getCounsellorId(id,cname){

  localStorage.setItem('c_id',id);
  localStorage.setItem('c_name',cname);

}







}

