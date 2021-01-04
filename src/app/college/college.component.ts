
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  cdnHost = environment.cdnHost;


  constructor(private meta: Meta, private titleService: Title,private http: HttpClient) {
    this.meta.updateTag({ name: 'description', content: ' Our on ground team also does live events in vadodara, ahmedabad, surat & gujarat colleges. We deliver seminars, presentations and psychometrics with career counselling.' });
    this.meta.updateTag({ name: 'keywords', content: 'gallery, college, vadodara, ahmedabad, surat, career, counselling, gujarat' });
    this.setTitle('Gallery | Vadodara Ahmedabad Surat Colleges | Gujarat | Career Counselling    ');

   }

  collages =[];
   getCollages(){
    return this.http.get<any>('https://dashboard.careernaksha.com/collages')
   }

  ngOnInit() {
    this.getCollages().subscribe(data => {
      console.log("---data collage---",data);
      this.collages=data;
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
