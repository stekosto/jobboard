import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Signup } from 'src/app/models/signup';
import { Login } from 'src/app/models/login';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();
  constructor(private router: Router) { }

  registerUser(authData: Signup) {
    this.user = {
      email: authData.username,
      userId: Math.round(Math.random() * 1000).toString()
    };
    console.log('registerUser', this.user);
    this.authChange.next(true);
    this.router.navigate(['/user']);
  }

  login(authData: Login) {
    this.user = {
      email: authData.username,
      userId: Math.round(Math.random() * 1000).toString()
    };
    console.log('login', this.user);
    this.authChange.next(true);
    this.router.navigate(['/user']);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    console.log('authService', this.user);
    return this.user != null;
  }
}
