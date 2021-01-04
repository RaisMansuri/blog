import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-careerrojgar',
  templateUrl: './careerrojgar.component.html',
  styleUrls: ['./careerrojgar.component.css']
})
export class CareerrojgarComponent implements OnInit {

  cdnHost = environment.cdnHost;


  constructor(private meta: Meta, private titleService: Title,private http:HttpClient) {
    this.meta.updateTag({ name: 'description', content: ' We conduct job fair in vadodara, ahmedabad, surat & gujarat colleges. ' });
    this.meta.updateTag({ name: 'keywords', content: ' gallery, job, fair, colleges, vadodara, ahmedabad, surat, gujarat  ' });
    this.setTitle('Gallery | Job Fair Colleges | CareerRojgar | Vadodara Ahmedabad Surat | Gujarat ');

   }
   careerrojgars =[];
   getcareerrojgars(){
    return this.http.get<any>('https://dashboard.careernaksha.com/careerrojgars')
   }

  ngOnInit() {
    this.getcareerrojgars().subscribe(data => {
      console.log("---data careerrojgars---",data);
      this.careerrojgars=data;
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