import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {
  cdnHost = environment.cdnHost;


  constructor(private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: ' Our on ground team also does live events in vadodara, ahmedabad, surat & gujarat schools. We deliver seminars, presentations and psychometrics with career counselling.    ' });
    this.meta.updateTag({ name: 'keywords', content: ' gallery, school, vadodara, ahmedabad, surat, career, counselling, gujarat' });
    this.setTitle(' Gallery | Vadodara Ahmedabad Surat Schools | Gujarat | Career Counselling');

   }

  ngOnInit() {
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

scroll(){
  window.scroll(0, 0);
}


}