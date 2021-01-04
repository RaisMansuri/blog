import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-ongoing-event',
  templateUrl: './ongoing-event.component.html',
  styleUrls: ['./ongoing-event.component.css']
})
export class OngoingEventComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title,private http:HttpClient) {
    this.meta.updateTag({ name: 'description', content: 'We conduct various events in vadodara, ahmedabad, surat & gujarat. We deliver seminars, presentations and psychometrics with career counselling for schools, colleges, companies, NGOs etc.   ' });
    this.meta.updateTag({ name: 'keywords', content: 'gallery, ongoing, events, vadodara, ahmedabad, surat, career, counselling, gujarat, ngo, companies' });
    this.setTitle('Gallery | Ongoing Events | Vadodara Ahmedabad Surat | Gujarat | Career Counselling    ');

   }
   ongoingevents=[];
   getongoingevents(){
    return this.http.get<any>('https://dashboard.careernaksha.com/ongoingevents')
   }
  ngOnInit() {
    this.getongoingevents().subscribe(data => {
      console.log("---data ongoingevents---",data);
      this.ongoingevents=data;
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
