import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  cdnHost = environment.cdnHost;
   
  


  constructor(private meta: Meta, private titleService: Title) {

    this.meta.updateTag({ name: 'description', content: 'Team comprises of high profile individuals, experienced counselors, guides, mentors looking to help students, graduates and professionals grow in their career path, profession, jobs, internships etc.' });
    this.meta.updateTag({ name: 'author', content: 'www.careernaksha.com' });
    this.meta.updateTag({ name: 'keywords', content: 'Mentor, Guide, Counselor, Expert, Experienced, Professional, Visionary, Entrepreneur' });
    this.setTitle('About us | Team MNC Corporate Startups | Experienced Counselors | CareerNaksha');
   }

   
  ngOnInit() {
  }
   

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

}
