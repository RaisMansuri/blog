import { Component, OnInit } from '@angular/core';
import { environment } from './../../environments/environment';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements OnInit {
  cdnHost = environment.cdnHost;

  constructor(private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: ' We keep all our data confidential, encrypted and stored in databases. We follow all the compliance and global guidelines to protect users data and privacy. Our policies are instrumental for our success.' });
    this.meta.updateTag({ name: 'keywords', content: 'privacy, policy, users, data, protection, compliance, global, confidential, encrypted' });
    this.setTitle('Privacy Policy | Compliance | Global Users Data & Protection | CareerNaksha');

   }

  ngOnInit() {
  }

  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

}
