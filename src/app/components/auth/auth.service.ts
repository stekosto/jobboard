import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Signup } from 'src/app/models/signup';
import { Login } from 'src/app/models/login';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  isAuthenticated: boolean;
  userType = new Subject<string>();
  authChange = new Subject<boolean>();
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private afs: AngularFirestore
    ) { }

  registerUser(authData: Signup) {
    this.afAuth.auth.createUserWithEmailAndPassword(authData.username, authData.password)
    .then(result => {
      const userId = result.user.uid;
      const username = result.user.email;
      const account = {
        username: username,
        userId : userId,
        createdAt: new Date(),
        userType: authData.userType
      };
      this.afs.collection('users').add(account);
      console.log(result.user.uid);
      this.authChange.next(true);
      this.router.navigate(['/user']);
      this.isAuthenticated = true;
    })
      .catch(error => {
        this.snackBar.open(error.message, null, {duration: 3000});
      });
    // this.user = {
    //   email: authData.username,
    //   userType: authData.userType,
    //   userId: Math.round(Math.random() * 1000).toString()
    // };
    // console.log('registerUser', this.user);
    // this.userType.next(this.user.userType);
  }

  login(authData: Login) {
    this.afAuth.auth.signInWithEmailAndPassword(authData.username, authData.password).then(result => {
      const userId = result.user.uid;
      console.log(result);
      this.authChange.next(true);
      this.router.navigate(['/user']);
      this.isAuthenticated = true;
    })
      .catch(error => {
        this.snackBar.open(error.message, null, {duration: 3000});
      });
    // this.user = {
    //   email: authData.username,
    //   userId: Math.round(Math.random() * 1000).toString()
    // };
    // console.log('login', this.user);
    // this.userType.next(this.user.userType);
  }

  logout() {
    // this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
    this.isAuthenticated = false;
  }

  // getUser() {
  //   return { ...this.user };
  // }

  isAuth() {
    return this.isAuthenticated;
  }
}
