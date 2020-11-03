import { Injectable } from '@angular/core';
import { Http, RequestOptions} from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  constructor(private http: Http) { }

 
}
