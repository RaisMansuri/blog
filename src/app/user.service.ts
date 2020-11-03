import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators'
import { Router } from '@angular/router';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class UserService {
     uid = this.afAuth.authState.pipe(
     map(authState =>{
      
        if (!authState){
         return null;
       }else{
         return authState.uid;
       }
      })
     );
     isAdmin = observableOf(true); 
       constructor(private afAuth: AngularFireAuth,private router: Router) { }
 
         login(){
            this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
            
         }

         logout(){
            this.afAuth.auth.signOut();
         }

      }
