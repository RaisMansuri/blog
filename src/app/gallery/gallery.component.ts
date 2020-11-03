import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  cdnHost = environment.cdnHost;


  public pastevent:boolean = true;
  public UpcomingEvent:boolean = false;
  public buttonName:any = 'pastevent';
  public buttonName2:any = 'pastevent';

  constructor(private meta: Meta, private titleService: Title) { 

    this.meta.updateTag({ name: 'description', content: ' CareerNaksha organizes events, seminars in schools, colleges for youths. We have also gotten featured  in media for our various past events like GlobalVidhya, CSR etc.    ' });
    this.meta.updateTag({ name: 'keywords', content: 'gallery, school, college, event, career, youth, seminar, globalvidhya, media, organize' });
    this.setTitle('Gallery | School College Events | Career Youth Seminars | GlobalVidhya | Media');

  }

  ngOnInit() {
    
  }

  toggle(){

    this.pastevent = !this.pastevent;

    if(this.pastevent)  
      this.buttonName = "Past Event";
    else
      this.buttonName2= "Past Event";
  }

  toggle2(){

    this.UpcomingEvent = !this.UpcomingEvent;

    
    if(this.UpcomingEvent)  
      this.buttonName = "Upcoming Event";
    else
      this.buttonName2= "Upcoming Event";
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

scroll(){
  window.scroll(0, 0);
}


}