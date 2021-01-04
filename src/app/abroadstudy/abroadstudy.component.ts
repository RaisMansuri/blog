import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-abroadstudy',
  templateUrl: './abroadstudy.component.html',
  styleUrls: ['./abroadstudy.component.css']
})
export class AbroadstudyComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title) { 

    this.meta.updateTag({ name: 'description', content: 'Students looking to go overseas or abroad or admissions in India for studies, education, higher degree, college or university can join our GlobalVidhya program ' });
    this.meta.updateTag({ name: 'keywords', content: 'study, abroad, overseas, education, globalvidhya, college, india, university, admissions' });
    this.setTitle('Study Abroad | Overseas Education | Study in India | College & University Admissions | GlobalVidhya');
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