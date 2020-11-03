import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  cdnHost = environment.cdnHost;


  showmore = false;
  showbutton = true;

  constructor(private meta: Meta, private titleService: Title,private http: HttpClient) {

    this.meta.updateTag({ name: 'description', content: 'Know about new age careers, off beat careers, modern skills, job skills, soft skills, growth careers, jobs, internships, higher studies, abroad consultancy' });
    this.meta.updateTag({ name: 'author', content: 'www.careernaksha.com' });
    this.meta.updateTag({ name: 'keywords', content: 'Articles, Content, Writing, Careers, Offbeat, Conventional, non-conventional' });


   this.setTitle('Blog Articles | CareerNaksha');

   }
   blogs =[];
   getBlogs(){
    return this.http.get<any>('https://dashboard.careernaksha.com/blogs')
   }

  ngOnInit() {
    this.getBlogs().subscribe(data => {
      this.blogs=data;
    })
  }

  showMore(){
    this.showmore = true;
    this.showbutton = false;
  }
  b  = function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v3.2&appId=321230588660664&autoLogAppEvents=1';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk');


  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle );
    window.scroll(0, 0);
  }

scroll(){
  window.scroll(0, 0);
}
}