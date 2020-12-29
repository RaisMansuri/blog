import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta , Title} from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-youth-events',
  templateUrl: './youth-events.component.html',
  styleUrls: ['./youth-events.component.css']
})
export class YouthEventsComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title,private http:HttpClient) {
    this.meta.updateTag({ name: 'description', content: ' Our on ground team also does live youth events in vadodara, ahmedabad, surat & gujarat. We deliver seminars, presentations and psychometrics with career counselling.    ' });
    this.meta.updateTag({ name: 'keywords', content: 'gallery, youth, events, vadodara, ahmedabad, surat, career, counselling, gujarat' });
    this.setTitle('Gallery | Vadodara Ahmedabad Surat Youth Events | Gujarat | Career Counselling ');

   }
   youthevents =[];
   getYouthevents(){
    return this.http.get<any>('https://dashboard.careernaksha.com/youthevents')
   }

  ngOnInit() {
    this.getYouthevents().subscribe(data => {
      console.log("---data Youthevents---",data);
      this.youthevents=data;
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
