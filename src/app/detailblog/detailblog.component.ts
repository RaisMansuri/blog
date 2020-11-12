import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

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
  blogDetail="";
  constructor(private http:HttpClient, private route: ActivatedRoute) { }
  getDetailBlog(){
    return this.http.get<any>(`https://dashboard.careernaksha.com/blogs/${this.id}`)
  }
  ngOnInit(): void {
    this.url = this.route.snapshot.params.blog_url;
    this.id=this.route.snapshot.params.id;
    this.getDetailBlog().subscribe(data => {
      console.log("---data blog detail---",data);
      this.title=data.blog_title
      this.imageUrl=`https://dashboard.careernaksha.com${data.blog_image.url}`
      this.blogDetail=data.blog_fdetail
      
    })
  }

}
