import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginFormString: string;
  isAccepted: boolean;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login({
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      });
    } else { alert('Please check your credentials'); }
  }

  getErrorMessage(controlName) {
    // console.log(controlName);
    if (controlName != null) {
      return this.loginForm.get(controlName).hasError('required') ? 'You must enter a value' :
        this.loginForm.get(controlName).hasError('email') ? 'Not a valid email' :
            '';
    }
  }

}
