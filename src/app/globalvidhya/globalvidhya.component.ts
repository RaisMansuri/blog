import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-globalvidhya',
  templateUrl: './globalvidhya.component.html',
  styleUrls: ['./globalvidhya.component.css']
})
export class GlobalvidhyaComponent implements OnInit {

  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title,private http: HttpClient) {
    this.meta.updateTag({ name: 'description', content: ' We conduct yearly seminar or webinar on study abroad & overseas education in gujarat in partnership with many companies for the benefits of students' });
    this.meta.updateTag({ name: 'keywords', content: 'gallery, studyabroad, overseas, education, gujarat' });
    this.setTitle('Gallery | Study Abroad | Event GlobalVidhya | Overseas Education | Gujarat     ');

   }

   globalvidhyas =[];
   getGlobalvidhyas(){
    return this.http.get<any>('https://dashboard.careernaksha.com/globalvidhyas')
   }

  ngOnInit() {
    this.getGlobalvidhyas().subscribe(data => {
      console.log("---data Globalvidhyas---",data);
      this.globalvidhyas=data;
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
