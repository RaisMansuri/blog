import { Component, OnInit ,Input} from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
  @Input() init:number =null;
  public counter:number= 0;

  startCountdown(){
    if(this.init && this.init>0)
    {
      this.counter = this.init;
      this.doCountdown();
    }
  }

  doCountdown(){
    setTimeout(()=>{
      this.counter=this.counter-1;
      this.processCount();
    },1000)
  }

  processCount(){
    //emit event

    if(this.counter == 0){
      //emit event
      alert('Time Is Up');
      this.router.navigateByUrl('/profile')
    }

    else{
      this.doCountdown();
    }
  }


  ngOnInit() {

    this.startCountdown();
  }

}