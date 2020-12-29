import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recoverpwd',
  templateUrl: './recoverpwd.component.html',
  styleUrls: ['./recoverpwd.component.css']
})
export class RecoverpwdComponent implements OnInit {

  cdnHost = environment.cdnHost;

  recoveryEmail = {
    email:""
  }
  message: string;
  constructor(private _auth: AuthService) {}

  ngOnInit(): void {
  }

  recoverpwd(){
    this.message="Reset link sent to your mail ID"
    this._auth.recoverpwd(this.recoveryEmail).subscribe(
      response => console.log(response),
      err => console.log(err)
    );
  }

}
