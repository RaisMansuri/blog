import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';

const hosturl = environment.hosturl;

// const hosturl = "https://api.careernaksha.com";
// const hosturl = "http://localhost:3000";
const apiFormUrl = hosturl + "/api/registerForm";


export interface Standard {
  value: string;
  viewValue: string;
}

export interface Report {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-tuformdetails',
  templateUrl: './tuformdetails.component.html',
  styleUrls: ['./tuformdetails.component.css']
})


export class TuformdetailsComponent implements OnInit {

  standards: Standard[] = [
    { value: '', viewValue: '-Select-' },
    { value: 'grade8', viewValue: 'School Student(Grade 8)' },
    { value: 'grade9-10', viewValue: 'School Student(Grade 9-10)' },
    { value: 'grade11-12', viewValue: 'School Student(Grade 11-12)' },
    { value: 'graduate', viewValue: 'Graduate/Post Graduate' },
    { value: 'professional', viewValue: 'Working Professional' }
  ];

  report: Report[] = [
    { value: '', viewValue: '-Select-' },
    { value: 'summary', viewValue: 'Summary Report' },
    { value: 'detailReport', viewValue: 'Detail Report' },
    { value: 'detailReportCouncelling', viewValue: 'Detail Report + Counselling' }
  ];

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10)
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.maxLength(2)
    ]),
    standards: new FormControl('', [
      Validators.required,
    ]),
    report: new FormControl('', [
      Validators.required,
    ])
  });
  constructor(private router: Router, private httpclient: HttpClient) {
   

  }


  ngOnInit() {
   

  }



  saveForm(tuform) {
    console.log('tuform');
    console.log(tuform);
    return this.httpclient.post(apiFormUrl, tuform);

  }



  onTuFormSubmit() {
    console.log(this);

    this.saveForm(this.form.value).subscribe((post) => {
      console.log(post);

    });
  }
  
}