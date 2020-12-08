import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { passValidator } from '../register-dialog/validator';
import { Router } from '@angular/router';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {
  cdnHost = environment.cdnHost;
  form:FormGroup;
  errormessage:String;
  message: string;
  
  constructor(private _auth: AuthService,private fb: FormBuilder,private router:Router) {
    
    let link=this.router.url
    localStorage.setItem('link',link);

    this.form = this.fb.group({

      password:['', Validators.required],
      conformpassword:['',passValidator]
  
     });

     this.form.controls.password.valueChanges
     .subscribe(
       x => this.form.controls.conformpassword.updateValueAndValidity()
     )
   }

  
  
  ngOnInit(): void {
   
  }

  onSubmit(){
    console.log(this);
    
    if (this.form.valid) {
     this.message="Password reset successful! please wait...redirecting to login page"
     this.resetpwd();
   } else{
      this.errormessage = 'passwords does not match !'
    }
  }

  resetpwd(){
   
    this._auth.resetpwd(this.form.value).subscribe(
      response => console.log(response),
      
      err => console.log(err)
    );
    setTimeout(() => {
     
      this.router.navigate(['/login']);
  }, 5000);
  }
}
