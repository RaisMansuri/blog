import { HttpClient } from '@angular/common/http';
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


  constructor(private meta: Meta, private titleService: Title,private http: HttpClient) {
    this.meta.updateTag({ name: 'description', content: ' Our on ground team also does live events in vadodara, ahmedabad, surat & gujarat schools. We deliver seminars, presentations and psychometrics with career counselling.    ' });
    this.meta.updateTag({ name: 'keywords', content: ' gallery, school, vadodara, ahmedabad, surat, career, counselling, gujarat' });
    this.setTitle(' Gallery | Vadodara Ahmedabad Surat Schools | Gujarat | Career Counselling');

   }

   schools=[];
   getSchools(){
    return this.http.get<any>('https://dashboard.careernaksha.com/schools')
   }
  ngOnInit() {
    this.getSchools().subscribe(data => {
      console.log("---data schools---",data);
      this.schools=data;
    })
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

scroll(){
  window.scroll(0, 0);
}


}