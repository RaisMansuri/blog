import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { environment } from './../../environments/environment';
@Component({
  selector: 'app-careermedia',
  templateUrl: './careermedia.component.html',
  styleUrls: ['./careermedia.component.css']
})
export class CareermediaComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: ' We get features in media, news and various local channels in vadodara, ahmedabad, surat & gujarat. We deliver seminars, presentations and psychometrics with career counselling.' });
    this.meta.updateTag({ name: 'keywords', content: 'gallery, media, news, events, vadodara, ahmedabad, surat, career, counselling, gujarat    ' });
    this.setTitle(' Gallery | Media| Vadodara Ahmedabad Surat | Gujarat | Career Counselling ');

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