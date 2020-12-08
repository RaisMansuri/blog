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
    date="";
    read_date="";
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
  this.date=new Date(`${this.appoData.date}T${this.appoData.time}`).toISOString()
  this.read_date=new Date(`${this.appoData.date}T${this.appoData.time}`).toDateString()
  this.http.post<any>('https://dashboard.careernaksha.com/appointments',{
    "Name":`${this.appoData.name}`,
    "Date":`${this.date}`,
    "counsellor":{
      "_id":`${this.id}`,
      "name": `${this.name}`,
    },
    "Counsellor_Name": `${this.cname}`,
    "read_Date":`${this.read_date}` + ' ' + `${this.appoData.time}`
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
