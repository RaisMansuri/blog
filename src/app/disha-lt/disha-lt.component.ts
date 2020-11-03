import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-disha-lt',
  templateUrl: './disha-lt.component.html',
  styleUrls: ['./disha-lt.component.css']
})
export class DishaLTComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor() { }

  ngOnInit() {
  }

}
