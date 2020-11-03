import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-test-report',
  templateUrl: './test-report.component.html',
  styleUrls: ['./test-report.component.css']
})
export class TestReportComponent implements OnInit {
  cdnHost = environment.cdnHost;


  e = "";
  a = "";
  c = "";
  n = "";
  o = "";



  constructor() { 

    this.scroll();
    this.e = localStorage.getItem('e');
    this.a = localStorage.getItem('a');
    this.c = localStorage.getItem('c');
    this.n = localStorage.getItem('n');
    this.o = localStorage.getItem('o');

  }

  ngOnInit() {
  }
  scroll(){
    window.scroll(0, 0);
  }
}
