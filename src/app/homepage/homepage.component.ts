import { Component, OnInit } from '@angular/core';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import  '../../styles.css';
import { Title } from '@angular/platform-browser';
import { environment } from './../../environments/environment';
import { Meta } from '@angular/platform-browser';
import * as $ from 'jquery';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  cdnHost = environment.cdnHost;
  students=100000;
  hours=50000;
  mentors=1000;



  constructor(private dialog: MatDialog, private authService: AuthService, 
    private router: Router,public user: UserService, private titleService: Title,public meta: Meta,private http:HttpClient) {

      this.meta.updateTag({ name: 'description', content: 'Online career counselling & guidance using advance research-based career test & top counsellors for school students, college students, graduates and professionals'});
    this.meta.updateTag({ name: 'keywords', content: ' online, career test, career counselling, career guidance, counsellor, school, college, graduates, students, professionals' });
    this.setTitle('Online Career Counselling, Guidance | Career Test | Counsellor')

    }

    blogs =[];
    getBlogs(){
     return this.http.get<any>('https://dashboard.careernaksha.com/blogs?_sort=_id:ASC&_limit=2')
    }

  ngOnInit() {
    var counted = 0;
$(window).scroll(function() {

  var oTop = $('.counter-data').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});
this.getBlogs().subscribe(data => {
  console.log("---data blogs---",data);
  this.blogs=data;
})
  }

                      public setTitle( newTitle: string) {
                        this.titleService.setTitle( newTitle );
                      }
  openLoginDialog() {
    if (!this.authService.loggedIn()) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = false;
      dialogConfig.autoFocus = false;
      dialogConfig.hasBackdrop = true;
      dialogConfig.panelClass = 'dialog-panel';
      this.dialog.closeAll();
      this.dialog.open(LoginDialogComponent, dialogConfig);
    } else {
      this.dialog.closeAll();
      this.router.navigate(['/profile']);
    }

  }



scroll(){
  window.scroll(0, 0);
}





}
