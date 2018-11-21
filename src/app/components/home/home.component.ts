import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuth = false;
searchHomeForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchHomeForm = this.fb.group({
      'keyword': ['', [Validators.required]],
      'location': ['', [Validators.required]]
    });
  }

  get keyword() { return this.searchHomeForm.get('keyword'); }
  get location() { return this.searchHomeForm.get('location'); }

  getErrorMessage(controlName) {
    // console.log(controlName);
    if (controlName != null) {
      return this.searchHomeForm.get(controlName).hasError('required') ? 'You must enter a value' : '';
    }
  }

  onSubmit() {
    if (this.searchHomeForm.valid) { console.log(this.searchHomeForm.value);
    } else { alert('Please check your credentials'); }
  }

}
