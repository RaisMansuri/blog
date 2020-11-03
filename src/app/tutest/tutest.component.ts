import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-tutest',
  templateUrl: './tutest.component.html',
  styleUrls: ['./tutest.component.css']
})
export class TutestComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor() { }

  ngOnInit() {
  }

}
