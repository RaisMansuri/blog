import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-detailblog',
  templateUrl: './detailblog.component.html',
  styleUrls: ['./detailblog.component.css']
})
export class DetailblogComponent implements OnInit {
  id="";
  title="";
  url=``;
  blogDetail="";
  constructor(private http:HttpClient) { }
  getDetailBlog(){
    return this.http.get<any>(`https://dashboard.careernaksha.com/blogs/${this.id}`)
  }
  ngOnInit(): void {
    this.id=localStorage.getItem('b_id');
    this.getDetailBlog().subscribe(data => {
     
      this.title=data.Blog_Title
      this.url=`https://dashboard.careernaksha.com/${data.blog_image.url}`
      this.blogDetail=data.Blog_text
      
    })
  }

}
