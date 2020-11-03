import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title) {


    this.meta.updateTag({ name: 'description', content: 'Data-driven, career counseling, modern approach, students, graduates, professionals, partnerships with schools, colleges, universities and institutes' });
    this.meta.updateTag({ name: 'author', content: 'www.careernaksha.com' });
   this.meta.updateTag({ name: 'keywords', content: 'Career Counseling, Guidance, Connection, Jobs, Higher Studies, Internships' });
 
   this.setTitle('CareerDisha | CareerParamarsh | CareerPatri | CareerRozgar | CareerSampark | CareerPariksha | CareerPrerna | CareerPath | CareerNaksha');

 
  }

  ngOnInit() {
  }


  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }



}
