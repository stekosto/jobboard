import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Signup } from 'src/app/models/signup';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, DoCheck {
  signupForm: FormGroup;
  signupFormString: string;
  isAccepted: boolean;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'userType': [null, [Validators.required]],
      'username': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
      'valPassword': ['', [Validators.required]],
      'terms': [{ value: '', disabled: false }, [Validators.required]]
    },
      { validator: this.passValidatorMatch });
  }

  ngDoCheck() {
    // console.log(this.signupForm);
  }

  /* Shorthands for form controls (used from within template) */
  get password() { return this.signupForm.get('password'); }
  get valpassword() { return this.signupForm.get('valPassword'); }
  get userType() { return this.signupForm.get('userType'); }

  onSubmit() {
    if (this.signupForm.valid) {
      this.authService.registerUser({
        username: this.signupForm.value.username,
        password: this.signupForm.value.password,
        userType: this.signupForm.value.userType
      });
      console.log('dfa', this.userType.value);
      // this.signupFormString = JSON.stringify(this.signupForm.value, null, 3);
      // alert(this.signupFormString);
    } else { alert('Please fill this form'); }
  }

  passValidatorMatch(frm: AbstractControl): {[key: string]: boolean} {
    if (!frm.get('password') || !frm.get('valPassword')) { return null; }
    return frm.get('password').value === frm.get('valPassword').value
      ? null : { 'nomatch': true };
  }

  getErrorMessage(controlName) {
    // console.log(controlName);
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

  onCheckToggle(event: any) {
    if (event.value !== null && event.checked === true) {
      this.isAccepted = true;
    } else {
      this.isAccepted = false;
    }
  }

  onPasswordInput() {
    if (this.signupForm.hasError('nomatch') && this.signupForm.get('valPassword').value !== '') {
      this.valpassword.setErrors({'nomatch': true});
    } else if (this.signupForm.get('valPassword').value === '') {
      this.valpassword.setErrors({'required': true});
  } else { this.valpassword.setErrors(null); }
}


}
