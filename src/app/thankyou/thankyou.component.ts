import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit {

  constructor(private meta: Meta, private titleService: Title) { 
    this.meta.updateTag({ name: 'description', content: 'Thank you for visiting and filling our application form. Our team will get in touch to setup an online - offline career counselling and guidance' });
    this.setTitle('Career counselling & career guidance | Thank you page');
  }

  ngOnInit() {
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }
  

}
