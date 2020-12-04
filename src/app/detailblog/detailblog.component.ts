import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title, MetaDefinition } from '@angular/platform-browser';
import { UpperCasePipe } from '@angular/common';
import { $ } from 'protractor';

@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  id="";
  title="";
  url=``;
  imageUrl = "";
  blogsubDetail="<p>{{blogDetail}}</p>";
  author="";
  date="";
  subimageUrl="";
  blog_seodetail="";
  blog_seoimageurl="";
  blog_seokeyword="";
  blog_seotitle="";
  

  constructor(private http:HttpClient, private route: ActivatedRoute,private meta: Meta, private titleService: Title) {
    this.meta.updateTag({ name: 'description', content: this.blog_seodetail });
    this.meta.updateTag({ name: 'author', content: this.author});
    this.meta.updateTag({ name: 'keywords', content: this.blog_seokeyword });
    this.meta.updateTag({ name: 'og:image', content: this.blog_seoimageurl });
    this.setTitle(this.blog_seotitle);
   
  }
   
   // this.titleService.setTitle(`${this.seotitle }` )
  
 
     
  getDetailBlog(){
    return this.http.get<any>(`https://dashboard.careernaksha.com/blogs/${this.id}`)
  }
  ngOnInit(): void {
    
    this.url = this.route.snapshot.params.blog_url;
    //this.url1 = this.url.toUpperCase()
    this.id=this.route.snapshot.params.id;
    this.getDetailBlog().subscribe(data => {
      console.log("---data blog detail---",data);
      this.title=data.blog_title
      this.imageUrl=`https://dashboard.careernaksha.com${data.blog_image.url}`
      this.blogsubDetail=data.blog_subdetail 
      this.author=data.blog_author
      this.date=data.blog_date
      this.setTitle=data.blog_seotitle
      this.subimageUrl=`https://dashboard.careernaksha.com${data.blog_subimage.url}`
    });
    
 
  }
  public setTitle( blog_seotitle: string) {
    this.titleService.setTitle(blog_seotitle);
    window.scroll(0, 0);
  }
}
