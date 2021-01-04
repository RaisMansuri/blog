import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-projectdisha',
  templateUrl: './projectdisha.component.html',
  styleUrls: ['./projectdisha.component.css']
})
export class ProjectdishaComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title,private http:HttpClient) {
    this.meta.updateTag({ name: 'description', content: 'We conducted social work via CSR activities of company L&T in surat for rural schools.  ' });
    this.meta.updateTag({ name: 'keywords', content: ' gallery, csr, rural, school, L&T, activities, surat, social, work    ' });
    this.setTitle(' Gallery | CSR Activities | Social Work| L&T Surat | Rural Schools   ');

   }

   projectdishas=[];
   getProjectdishas(){
    return this.http.get<any>('https://dashboard.careernaksha.com/projectdishas')
   }
  ngOnInit() {
    this.getProjectdishas().subscribe(data => {
      console.log("---data projectdishas---",data);
      this.projectdishas=data;
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
