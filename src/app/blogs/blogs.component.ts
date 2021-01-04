import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';
import { Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  id = '';
  title = '';
  url = ``;
  imageUrl = '';
  blogsubDetail = '<p>{{blogDetail}}</p>';
  author = '';
  date = '';
  subimageUrl = '';
  blog_seodetail = '';
  blog_seoimageurl = '';
  blog_seokeyword = '';
  blog_seotitle = '';
  userData: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private meta: Meta, private titleService: Title) {
  }

  getDetailBlog() {
    return this.http.get<any>(`https://dashboard.careernaksha.com/blogs/?blog_url=${this.url}`);
  }
  ngOnInit(): void {
    this.url = this.route.snapshot.params.blog_url;
    this.getDetailBlog().subscribe(data => {
      console.log('---data blog detail---', data);
      this.setTitle(data[0].blog_seotitle);
      this.title = data[0].blog_title;
      this.imageUrl = `https://dashboard.careernaksha.com${data[0].blog_image.url}`;
      this.blogsubDetail = data[0].blog_subdetail ;
      this.author = data[0].blog_author;
      this.date = data[0].blog_date;
      this.blog_seodetail = data[0].blog_seodetail;
      this.subimageUrl = `https://dashboard.careernaksha.com${data[0].blog_subimage.url}`;
//https://dashboard.careernaksha.com
      this.blog_seokeyword = data[0].blog_seokeyword;
      this.blog_seoimageurl = data[0].blog_seoimageurl;
      this.blog_seotitle = data[0].blog_seotitle;

      this.meta.updateTag({ name: 'description', content: this.blog_seodetail });
      this.meta.updateTag({ name: 'author', content: this.author});
      this.meta.updateTag({ name: 'keywords', content: this.blog_seokeyword });
      this.meta.updateTag({ name: 'og:image', content: this.blog_seoimageurl });
      console.log(this.blog_seotitle);
     

    });

   
  }
  public setTitle( blog_seotitle: string) {
    this.titleService.setTitle(blog_seotitle);
    window.scroll(0, 0);
  }

  
}