import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { Meta } from '@angular/platform-browser';
import { Title } from '@angular/platform-browser';

export interface Time {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-roi',
  templateUrl: './roi.component.html',
  styleUrls: ['./roi.component.css']
})
export class RoiComponent implements OnInit {

  cdnHost = environment.cdnHost;

  


  time: Time[] = [
    {value: 'daily', viewValue: 'Daily'},
    {value: 'weekly', viewValue: 'Weekly'},
    {value: 'monthly', viewValue: 'Monthly'},
    {value: 'yearly', viewValue: 'Yearly'}
  ];


  currency: Time[] = [
    {value: 'rupees', viewValue: 'Rupees'},
    {value: 'dollar', viewValue: 'Dollar'},
    {value: 'euro', viewValue: 'Euro'},
    {value: 'pound', viewValue: 'Pound'},
  ];
  sel=1;
  gen=2;
  ear=2;
 ctwo:boolean=false;
 cthird:boolean=false;
 cfour:boolean=false;
 cfive:boolean=false;
 csix:boolean=false;
 cseven:boolean=false;
 ceight:boolean=false;
 cnine:boolean=false;
 cten:boolean=false;


 etwo:boolean=false;
 ethree:boolean=false;
 efour:boolean=false;
 efive:boolean=false;
 esix:boolean=false;
 eseven:boolean=false;
 eeight:boolean=false;
 enine:boolean=false;
 eten:boolean=false;

  expense = {
    cost:"",
    costsecond:"0",
    costthird:"0",
    costfour:"0",
    costfive:"0",
    costsix:"0",
    costseven:"0",
    costeight:"0",
    costnine:"0",
    costten:"0",
    loan:"",
    dtd:"",
    salary:"",
    earningtwo:"0",
    earningthree:"0",
    earningfour:"0",
    earningfive:"0",
    earningsix:"0",
    earningseven:"0",
    earningeight:"0",
    earningnine:"0",
    earningten:"0",
    earningttwo:"",
    earningtthree:"",
    earningtfour:"",
    earningtfive:"",
    earningtsix:"",
    earningtseven:"",
    earningteight:"",
    earningtnine:"",
    earningtten:"",
    aid:"",
    part:"",
    costt:"",
    costtsecond:"",
    costtthird:"",
    costtfour:"",
    costtfive:"",
    costtsix:"",
    costtseven:"",
    costteight:"",
    costtnine:"",
    costtten:"",
    loant:"",
    salaryt:"",
    aidt:"",
    dtdt:"",
    partt:"",
    currone:"rupees",
    currtwo:"rupees"
  }
  expsum="";
  earsum="";



warn=""
  BEY="";
  npv={
    growth:"",
    noy:""
  }
  totalnpv="";
  expsumroi="";
  earsumroi="";
  esum="";
 interest=1;
  
  constructor(private router: Router, private meta: Meta, private titleService: Title) { 

    this.meta.addTag({ name: 'description', content: 'Calculate return on your educational investment (ROI) using our calculator online.'});
    this.setTitle('Find return on your educational investment | ROI calculator ');


    this.earsumroi = localStorage.getItem('earsum');
    this.expsumroi = localStorage.getItem('expsum');
  }

  ngOnInit() {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    window.scroll(0, 0);
  }

   gencost(){

    if(this.gen == 2){
      this.ctwo = true;
      this.gen++;
    }else{
      if(this.gen == 3){
        this.cthird = true;
        this.gen++;
      }else{
        if(this.gen == 4){
          this.cfour = true;
          this.gen++;
        }else{
          if(this.gen == 5){
            this.cfive = true;
            this.gen++;
          }else{
            if(this.gen == 6){
              this.csix = true;
              this.gen++;
            }else{
              if(this.gen == 7){
                this.cseven = true;
                this.gen++;
              }else{
                if(this.gen == 8){
                  this.ceight = true;
                  this.gen++;
                }else{
                  if(this.gen == 9){
                    this.cnine = true;
                    this.gen++;
                  }else{
                    if(this.gen == 10){
                      this.cten = true;
                      this.gen++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
   



   }






   genearning(){

    if(this.ear == 2){
      this.etwo = true;
      this.ear++;
    }else{
      if(this.ear == 3){
        this.ethree = true;
        this.ear++;
      }else{
        if(this.ear == 4){
          this.efour = true;
          this.ear++;
        }else{
          if(this.ear == 5){
            this.efive = true;
            this.ear++;
          }else{
            if(this.ear == 6){
              this.esix = true;
              this.ear++;
            }else{
              if(this.ear == 7){
                this.eseven = true;
                this.ear++;
              }else{
                if(this.ear == 8){
                  this.eeight = true;
                  this.ear++;
                }else{
                  if(this.ear == 9){
                    this.enine = true;
                    this.ear++;
                  }else{
                    if(this.ear == 10){
                      this.eten = true;
                      this.ear++;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
   



   }







sub(){

  if((this.expense.cost && this.expense.loan && this.expense.dtd && this.expense.salary && this.expense.aid && this.expense.part) == "" || null){
     this.warn = "Please complete all the fields!!";
   }else{

   this.warn = "";

  localStorage.removeItem('break');
  localStorage.removeItem('earsum');
  localStorage.removeItem('expsum');
 if(this.expense.currone !== "rupees"){
  if(this.expense.currone=="dollar"){

    this.expense.cost = (parseInt(this.expense.cost)*71.05).toString();
    this.expense.loan = (parseInt(this.expense.loan)*71.05).toString();
    this.expense.dtd = (parseInt(this.expense.dtd)*71.05).toString();
    if(this.expense.costsecond !== ""){
      this.expense.costsecond = (parseInt(this.expense.costsecond)*71.05).toString();
    }
    if(this.expense.costthird !== ""){
      this.expense.costthird = (parseInt(this.expense.costthird)*71.05).toString();
    }
    if(this.expense.costfour !== ""){
      this.expense.costfour = (parseInt(this.expense.costfour)*71.05).toString();
    }
    if(this.expense.costfive !== ""){
      this.expense.costfive = (parseInt(this.expense.costfive)*71.05).toString();
    }
    if(this.expense.costsix !== ""){
      this.expense.costsix = (parseInt(this.expense.costsix)*71.05).toString();
    }
    if(this.expense.costseven !== ""){
      this.expense.costseven = (parseInt(this.expense.costseven)*71.05).toString();
    }
    if(this.expense.costeight !== ""){
      this.expense.costeight = (parseInt(this.expense.costeight)*71.05).toString();
    }
    if(this.expense.costnine !== ""){
      this.expense.costnine = (parseInt(this.expense.costnine)*71.05).toString();
    }
    if(this.expense.costten !== ""){
      this.expense.costten = (parseInt(this.expense.costten)*71.05).toString();
    }
  }
  if(this.expense.currone=="pound"){
    this.expense.cost = (parseInt(this.expense.cost)*91.12).toString();
    this.expense.loan = (parseInt(this.expense.loan)*91.12).toString();
    this.expense.dtd = (parseInt(this.expense.dtd)*91.12).toString();
    if(this.expense.costsecond !== ""){
      this.expense.costsecond = (parseInt(this.expense.costsecond)*91.12).toString();
    }
    if(this.expense.costthird !== ""){
      this.expense.costthird = (parseInt(this.expense.costthird)*91.12).toString();
    }
    if(this.expense.costfour !== ""){
      this.expense.costfour = (parseInt(this.expense.costfour)*91.12).toString();
    }
    if(this.expense.costfive !== ""){
      this.expense.costfive = (parseInt(this.expense.costfive)*91.12).toString();
    }
    if(this.expense.costsix !== ""){
      this.expense.costsix = (parseInt(this.expense.costsix)*91.12).toString();
    }
    if(this.expense.costseven !== ""){
      this.expense.costseven = (parseInt(this.expense.costseven)*91.12).toString();
    }
    if(this.expense.costeight !== ""){
      this.expense.costeight = (parseInt(this.expense.costeight)*91.12).toString();
    }
    if(this.expense.costnine !== ""){
      this.expense.costnine = (parseInt(this.expense.costnine)*91.12).toString();
    }
    if(this.expense.costten !== ""){
      this.expense.costten = (parseInt(this.expense.costten)*91.12).toString();
    }
  }
  if(this.expense.currone=="euro"){
    this.expense.cost = (parseInt(this.expense.cost)*80.06).toString();
    this.expense.loan = (parseInt(this.expense.loan)*80.06).toString();
    this.expense.dtd = (parseInt(this.expense.dtd)*80.06).toString();
    if(this.expense.costsecond !== ""){
      this.expense.costsecond = (parseInt(this.expense.costsecond)*80.06).toString();
    }
    if(this.expense.costthird !== ""){
      this.expense.costthird = (parseInt(this.expense.costthird)*80.06).toString();
    }
    if(this.expense.costfour !== ""){
      this.expense.costfour = (parseInt(this.expense.costfour)*80.06).toString();
    }
    if(this.expense.costfive !== ""){
      this.expense.costfive = (parseInt(this.expense.costfive)*80.06).toString();
    }
    if(this.expense.costsix !== ""){
      this.expense.costsix = (parseInt(this.expense.costsix)*80.06).toString();
    }
    if(this.expense.costseven !== ""){
      this.expense.costseven = (parseInt(this.expense.costseven)*80.06).toString();
    }
    if(this.expense.costeight !== ""){
      this.expense.costeight = (parseInt(this.expense.costeight)*80.06).toString();
    }
    if(this.expense.costnine !== ""){
      this.expense.costnine = (parseInt(this.expense.costnine)*80.06).toString();
    }
    if(this.expense.costten !== ""){
      this.expense.costten = (parseInt(this.expense.costten)*80.06).toString();
    }
  }
}

 if(this.expense.currtwo !== "rupees"){
  if(this.expense.currtwo=="dollar"){
    this.expense.salary = (parseInt(this.expense.salary)*71.05).toString();
    this.expense.aid = (parseInt(this.expense.aid)*71.05).toString();
    this.expense.part = (parseInt(this.expense.part)*71.05).toString();
    if(this.expense.earningttwo !== ""){
      this.expense.earningtwo = (parseInt(this.expense.earningtwo)*71.05).toString();
    }
    if(this.expense.earningtthree !== ""){
      this.expense.earningthree = (parseInt(this.expense.earningthree)*71.05).toString();
    }
    if(this.expense.earningtfour !== ""){
      this.expense.earningfour = (parseInt(this.expense.earningfour)*71.05).toString();
    }
    if(this.expense.earningtfive !== ""){
      this.expense.earningfive = (parseInt(this.expense.earningfive)*71.05).toString();
    }
    if(this.expense.earningtsix !== ""){
      this.expense.earningsix = (parseInt(this.expense.earningsix)*71.05).toString();
    }
    if(this.expense.earningtseven !== ""){
      this.expense.earningseven = (parseInt(this.expense.earningseven)*71.05).toString();
    }
    if(this.expense.earningteight !== ""){
      this.expense.earningeight = (parseInt(this.expense.earningeight)*71.05).toString();
    }
    if(this.expense.earningtnine !== ""){
      this.expense.earningnine = (parseInt(this.expense.earningnine)*71.05).toString();
    }
    if(this.expense.earningtten !== ""){
      this.expense.earningten = (parseInt(this.expense.earningten)*71.05).toString();
    }


  }
  if(this.expense.currtwo=="pound"){
    this.expense.salary = (parseInt(this.expense.salary)*91.12).toString();
    this.expense.aid = (parseInt(this.expense.aid)*91.12).toString();
    this.expense.part = (parseInt(this.expense.part)*91.12).toString();
    if(this.expense.earningttwo !== ""){
      this.expense.earningtwo = (parseInt(this.expense.earningtwo)*91.12).toString();
    }
    if(this.expense.earningtthree !== ""){
      this.expense.earningthree = (parseInt(this.expense.earningthree)*91.12).toString();
    }
    if(this.expense.earningtfour !== ""){
      this.expense.earningfour = (parseInt(this.expense.earningfour)*91.12).toString();
    }
    if(this.expense.earningtfive !== ""){
      this.expense.earningfive = (parseInt(this.expense.earningfive)*91.12).toString();
    }
    if(this.expense.earningtsix !== ""){
      this.expense.earningsix = (parseInt(this.expense.earningsix)*91.12).toString();
    }
    if(this.expense.earningtseven !== ""){
      this.expense.earningseven = (parseInt(this.expense.earningseven)*91.12).toString();
    }
    if(this.expense.earningteight !== ""){
      this.expense.earningeight = (parseInt(this.expense.earningeight)*91.12).toString();
    }
    if(this.expense.earningtnine !== ""){
      this.expense.earningnine = (parseInt(this.expense.earningnine)*91.12).toString();
    }
    if(this.expense.earningtten !== ""){
      this.expense.earningten = (parseInt(this.expense.earningten)*91.12).toString();
    }

  }
  if(this.expense.currtwo=="euro"){
    this.expense.salary = (parseInt(this.expense.salary)*80.06).toString();
    this.expense.aid = (parseInt(this.expense.aid)*80.06).toString();
    this.expense.part = (parseInt(this.expense.part)*80.06).toString();
    if(this.expense.earningttwo !== ""){
      this.expense.earningtwo = (parseInt(this.expense.earningtwo)*80.06).toString();
    }
    if(this.expense.earningtthree !== ""){
      this.expense.earningthree = (parseInt(this.expense.earningthree)*80.06).toString();
    }
    if(this.expense.earningtfour !== ""){
      this.expense.earningfour = (parseInt(this.expense.earningfour)*80.06).toString();
    }
    if(this.expense.earningtfive !== ""){
      this.expense.earningfive = (parseInt(this.expense.earningfive)*80.06).toString();
    }
    if(this.expense.earningtsix !== ""){
      this.expense.earningsix = (parseInt(this.expense.earningsix)*80.06).toString();
    }
    if(this.expense.earningtseven !== ""){
      this.expense.earningseven = (parseInt(this.expense.earningseven)*80.06).toString();
    }
    if(this.expense.earningteight !== ""){
      this.expense.earningeight = (parseInt(this.expense.earningeight)*80.06).toString();
    }
    if(this.expense.earningtnine !== ""){
      this.expense.earningnine = (parseInt(this.expense.earningnine)*80.06).toString();
    }
    if(this.expense.earningtten !== ""){
      this.expense.earningten = (parseInt(this.expense.earningten)*80.06).toString();
    }

  }
}















  if(this.expense.costt == "daily"){
    this.expense.cost = (parseInt(this.expense.cost)*365).toString();
  }
  if(this.expense.costt=="weekly"){
    this.expense.cost = (parseInt(this.expense.cost)*52).toString();
  }
  if(this.expense.costt == "monthly"){
    this.expense.cost = (parseInt(this.expense.cost)*12).toString();
  }

  if(this.expense.costtsecond !== ""){
    if(this.expense.costtsecond == "daily"){
      this.expense.costsecond = (parseInt(this.expense.costsecond)*365).toString();
    }
    if(this.expense.costtsecond=="weekly"){
      this.expense.costsecond = (parseInt(this.expense.costsecond)*52).toString();
    }
    if(this.expense.costtsecond == "monthly"){
      this.expense.costsecond = (parseInt(this.expense.costsecond)*12).toString();
    }
  }

  
   
  if(this.expense.costtthird !== ""){
    if(this.expense.costtthird == "daily"){
      this.expense.costthird = (parseInt(this.expense.costthird)*365).toString();
    }
    if(this.expense.costtthird=="weekly"){
      this.expense.costthird = (parseInt(this.expense.costthird)*52).toString();
    }
    if(this.expense.costtthird == "monthly"){
      this.expense.costthird = (parseInt(this.expense.costthird)*12).toString();
    }
  }

  if(this.expense.costtfour !== ""){
    if(this.expense.costtfour == "daily"){
      this.expense.costfour = (parseInt(this.expense.costfour)*365).toString();
    }
    if(this.expense.costtfour=="weekly"){
      this.expense.costfour = (parseInt(this.expense.costfour)*52).toString();
    }
    if(this.expense.costtfour == "monthly"){
      this.expense.costfour = (parseInt(this.expense.costfour)*12).toString();
    }
  }

  
  if(this.expense.costtfive !== ""){
    if(this.expense.costtfive == "daily"){
      this.expense.costfive = (parseInt(this.expense.costfive)*365).toString();
    }
    if(this.expense.costtfive=="weekly"){
      this.expense.costfive = (parseInt(this.expense.costfive)*52).toString();
    }
    if(this.expense.costtfive == "monthly"){
      this.expense.costfive = (parseInt(this.expense.costfive)*12).toString();
    }
 
  }


  if(this.expense.costtsix !== ""){
    if(this.expense.costtsix == "daily"){
      this.expense.costsix = (parseInt(this.expense.costsix)*365).toString();
    }
    if(this.expense.costtsix=="weekly"){
      this.expense.costsix = (parseInt(this.expense.costsix)*52).toString();
    }
    if(this.expense.costtsix == "monthly"){
      this.expense.costsix = (parseInt(this.expense.costsix)*12).toString();
    }
  }


  if(this.expense.costtseven !== ""){
    if(this.expense.costtseven == "daily"){
      this.expense.costseven = (parseInt(this.expense.costseven)*365).toString();
    }
    if(this.expense.costtseven=="weekly"){
      this.expense.costseven = (parseInt(this.expense.costseven)*52).toString();
    }
    if(this.expense.costtseven == "monthly"){
      this.expense.costseven = (parseInt(this.expense.costseven)*12).toString();
    }
  }
  

  if(this.expense.costteight !== ""){
    if(this.expense.costteight == "daily"){
      this.expense.costeight = (parseInt(this.expense.costeight)*365).toString();
    }
    if(this.expense.costteight=="weekly"){
      this.expense.costeight = (parseInt(this.expense.costeight)*52).toString();
    }
    if(this.expense.costteight == "monthly"){
      this.expense.costeight = (parseInt(this.expense.costeight)*12).toString();
    }
  }
  

  if(this.expense.costtnine !== ""){
    if(this.expense.costtnine == "daily"){
      this.expense.costnine = (parseInt(this.expense.costnine)*365).toString();
    }
    if(this.expense.costtnine=="weekly"){
      this.expense.costnine = (parseInt(this.expense.costnine)*52).toString();
    }
    if(this.expense.costtnine == "monthly"){
      this.expense.costnine = (parseInt(this.expense.costnine)*12).toString();
    }
  
  }  

  
  if(this.expense.costtten !== ""){
    if(this.expense.costtten == "daily"){
      this.expense.costten = (parseInt(this.expense.costten)*365).toString();
    }
    if(this.expense.costtten=="weekly"){
      this.expense.costten = (parseInt(this.expense.costten)*52).toString();
    }
    if(this.expense.costtten == "monthly"){
      this.expense.costten = (parseInt(this.expense.costten)*12).toString();
    }
  

  }

  


   


  if(this.expense.loant == "daily"){
    this.expense.loan = (parseInt(this.expense.loan)*365).toString();
  }
  if(this.expense.loant=="weekly"){
    this.expense.loan = (parseInt(this.expense.loan)*52).toString();
  }
  if(this.expense.loant == "monthly"){
    this.expense.loan = (parseInt(this.expense.loan)*12).toString();
  }
  if(this.expense.dtdt == "daily"){
    this.expense.dtd = (parseInt(this.expense.dtd)*365).toString();
  }
  if(this.expense.dtdt=="weekly"){
    this.expense.dtd = (parseInt(this.expense.dtd)*52).toString();
  }
  if(this.expense.dtdt == "monthly"){
    this.expense.dtd = (parseInt(this.expense.dtd)*12).toString();
  }





  if(this.expense.earningttwo == "daily"){
    this.expense.earningtwo = (parseInt(this.expense.earningtwo)*365).toString();
  }
  if(this.expense.earningttwo =="weekly"){
    this.expense.earningtwo = (parseInt(this.expense.earningtwo)*52).toString();
  }
  if(this.expense.earningttwo == "monthly"){
    this.expense.earningtwo = (parseInt(this.expense.earningtwo)*12).toString();
  }





  if(this.expense.earningtthree == "daily"){
    this.expense.earningthree = (parseInt(this.expense.earningthree)*365).toString();
  }
  if(this.expense.earningtthree =="weekly"){
    this.expense.earningthree = (parseInt(this.expense.earningthree)*52).toString();
  }
  if(this.expense.earningtthree == "monthly"){
    this.expense.earningthree = (parseInt(this.expense.earningthree)*12).toString();
  }


  
  if(this.expense.earningtfour == "daily"){
    this.expense.earningfour = (parseInt(this.expense.earningfour)*365).toString();
  }
  if(this.expense.earningtfour =="weekly"){
    this.expense.earningfour = (parseInt(this.expense.earningfour)*52).toString();
  }
  if(this.expense.earningtfour == "monthly"){
    this.expense.earningfour = (parseInt(this.expense.earningfour)*12).toString();
  }




  if(this.expense.earningtfive == "daily"){
    this.expense.earningfive = (parseInt(this.expense.earningfive)*365).toString();
  }
  if(this.expense.earningtfive =="weekly"){
    this.expense.earningfive = (parseInt(this.expense.earningfive)*52).toString();
  }
  if(this.expense.earningtfive == "monthly"){
    this.expense.earningfive = (parseInt(this.expense.earningfive)*12).toString();
  }




  if(this.expense.earningtsix == "daily"){
    this.expense.earningsix = (parseInt(this.expense.earningsix)*365).toString();
  }
  if(this.expense.earningtsix =="weekly"){
    this.expense.earningsix = (parseInt(this.expense.earningsix)*52).toString();
  }
  if(this.expense.earningtsix == "monthly"){
    this.expense.earningsix = (parseInt(this.expense.earningsix)*12).toString();
  }




  if(this.expense.earningtseven == "daily"){
    this.expense.earningseven = (parseInt(this.expense.earningseven)*365).toString();
  }
  if(this.expense.earningtseven =="weekly"){
    this.expense.earningseven = (parseInt(this.expense.earningseven)*52).toString();
  }
  if(this.expense.earningtseven == "monthly"){
    this.expense.earningseven = (parseInt(this.expense.earningseven)*12).toString();
  }




  if(this.expense.earningteight == "daily"){
    this.expense.earningeight = (parseInt(this.expense.earningeight)*365).toString();
  }
  if(this.expense.earningteight =="weekly"){
    this.expense.earningeight = (parseInt(this.expense.earningeight)*52).toString();
  }
  if(this.expense.earningteight == "monthly"){
    this.expense.earningeight = (parseInt(this.expense.earningeight)*12).toString();
  }



  if(this.expense.earningtnine == "daily"){
    this.expense.earningnine = (parseInt(this.expense.earningnine)*365).toString();
  }
  if(this.expense.earningtnine =="weekly"){
    this.expense.earningnine = (parseInt(this.expense.earningnine)*52).toString();
  }
  if(this.expense.earningtnine == "monthly"){
    this.expense.earningnine = (parseInt(this.expense.earningnine)*12).toString();
  }




  if(this.expense.earningtten == "daily"){
    this.expense.earningten = (parseInt(this.expense.earningten)*365).toString();
  }
  if(this.expense.earningtten =="weekly"){
    this.expense.earningten = (parseInt(this.expense.earningten)*52).toString();
  }
  if(this.expense.earningtten == "monthly"){
    this.expense.earningten = (parseInt(this.expense.earningten)*12).toString();
  }




  
  if(this.expense.salaryt == "daily"){
    this.expense.salary = (parseInt(this.expense.salary)*365).toString();
  }
  if(this.expense.salaryt=="weekly"){
    this.expense.salary = (parseInt(this.expense.salary)*52).toString();
  }
  if(this.expense.salaryt == "monthly"){
    this.expense.salary = (parseInt(this.expense.salary)*12).toString();
  }
  if(this.expense.aidt == "daily"){
    this.expense.aid = (parseInt(this.expense.aid)*365).toString();
  }
  if(this.expense.aidt=="weekly"){
    this.expense.aid = (parseInt(this.expense.aid)*52).toString();
  }
  if(this.expense.aidt == "monthly"){
    this.expense.aid = (parseInt(this.expense.aid)*12).toString();
  }
  if(this.expense.partt == "daily"){
    this.expense.part = (parseInt(this.expense.part)*365).toString();
  }
  if(this.expense.partt=="weekly"){
    this.expense.part = (parseInt(this.expense.part)*52).toString();
  }
  if(this.expense.partt == "monthly"){
    this.expense.part = (parseInt(this.expense.part)*12).toString();
  }
   
 this.expsum = (parseInt(this.expense.cost) + parseInt(this.expense.costsecond) + parseInt(this.expense.costthird) + parseInt(this.expense.costfour)+ parseInt(this.expense.costfive) + parseInt(this.expense.costfive) + parseInt(this.expense.costsix) + parseInt(this.expense.costseven) + parseInt(this.expense.costeight) + parseInt(this.expense.costnine)+ parseInt(this.expense.costten) + parseInt(this.expense.loan) +parseInt(this.expense.dtd)).toString();

 this.earsum = (parseInt(this.expense.part) +parseInt(this.expense.aid) +parseInt(this.expense.salary) + parseInt(this.expense.earningtwo) + parseInt(this.expense.earningthree) + parseInt(this.expense.earningfour) + parseInt(this.expense.earningfive) + parseInt(this.expense.earningsix) + parseInt(this.expense.earningseven) + parseInt(this.expense.earningeight) + parseInt(this.expense.earningnine) + parseInt(this.expense.earningten)).toString();

  localStorage.setItem('break',(parseInt(this.expsum)/parseInt(this.earsum)).toFixed(1));

  localStorage.setItem('expsum',this.expsum);
  localStorage.setItem('earsum',this.earsum);
   
  this.BEY =(parseInt(this.expsum)/parseInt(this.earsum)).toFixed(1) ;
 
}
}



npvcal(){

 
  this.interest=1;
   for(let k=0;k<parseInt(this.npv.noy);k++){
     this.interest = (this.interest*(1+(parseInt(this.npv.growth)/100)));
     
    }
  
    this.esum = (this.interest*parseInt(this.earsumroi)).toString();
    
  
  
    this.totalnpv = (parseInt(this.npv.noy)*parseInt(this.expsumroi) - parseInt(this.esum)).toString(); 
  
  
  }




select(){
  if(this.sel == 1){
    this.sub();
    this.npvcal();
    this.sel++;
  }else{
    this.npvcal();
  }

}


}
