import { Injectable } from '@angular/core';

import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireAuthService {

  constructor(private auth: Auth, private router: Router) { }

  register(email:string, pass:string)
  {
    return createUserWithEmailAndPassword(this.auth, email, pass).then(
      (result)=>{
        console.log(result)    
      }
    ).catch((error)=>{
      console.log("Error" + error)
    })
  }

  login(user:string, pass:string)
  {
    return signInWithEmailAndPassword(this.auth, user, pass).then(result=>{})    
  }

  logout(){
    return signOut(this.auth).then(result=>{
      this.router.navigate(["login"]);
    })
  }

  googleAuth() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(result=>{
      this.router.navigate(["lista"]);
    })    
  }  

  currentUser(){
    return this.auth.currentUser
  }

  getAuthState(): Observable<User | null> {
    return new Observable(subscriber => {
      onAuthStateChanged(this.auth, (user) => {
        subscriber.next(user);
      });
    });
  }
}
