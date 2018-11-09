import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  signupFormString: string;
  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'usertype': new FormControl('', [Validators.required]),
      'username': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)]),
      'valPassword': new FormControl('', [Validators.required]),
    }, this.passValidatorMatch);
  }

  passValidatorMatch (frm: FormGroup) {
    console.log(frm);
    return frm.get('password').value === frm.get('valPassword').value
       ? null : {'mismatch': true};
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.signupFormString = JSON.stringify(this.signupForm.value, null, 3);
      alert(this.signupFormString);
    } else { alert('Please fill this form'); }
  }

  getErrorMessage(controlName) {
    // const controlName = 'kj';
    console.log(controlName);
    if (controlName != null) {
      return this.signupForm.get(controlName).hasError('required') ? 'You must enter a value' :
        this.signupForm.get(controlName).hasError('email') ? 'Not a valid email' :
        this.signupForm.get(controlName).hasError('minlength') ? 'Password is too short' :
          '';
    }
  }

  getPasswordLength(controlName) {
    if (this.signupForm.get(controlName).value !== null) {
      return this.signupForm.get(controlName).value.length;
    } else { return 0; }

  }


}
