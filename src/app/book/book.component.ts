import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

import * as jwt_decode from "jwt-decode";
import { AuthService } from '../auth.service';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  cdnHost = environment.cdnHost;

    id ="";
    name="";
    cname="";

    appoData ={
    name:"",
     date:"",
     Counsellor_Name:this.cname,
     time:"",
     "counsellor":{
       "_id":this.id,
       
     }
     
    }

  constructor(private auth: AuthService,private dialog: MatDialog,private http:HttpClient) { }

  ngOnInit() {
    this.cname = localStorage.getItem('c_name');
    this.id = localStorage.getItem('c_id');
    this.name=localStorage.getItem('social-name');
  }




sendData(){
  console.log(this.appoData.time);
  this.http.post<any>('https://dashboard.careernaksha.com/appointments',{
    "Name":`${this.appoData.name}`,
    "Date":`${this.appoData.date} ${this.appoData.time}`,
    "counsellor":{
      "_id":`${this.id}`,
      "name": `${this.name}`,
    },
    "Counsellor_Name": `${this.cname}`,
  })
  .subscribe(data => {
    console.log(data + ':00')
  })

  alert('Appointment Made Successfully');
  
}



getDecodedAccessToken(token: string): any {
  try{
      return jwt_decode(token);
  }
  catch(Error){
      return null;
  }
}


}
