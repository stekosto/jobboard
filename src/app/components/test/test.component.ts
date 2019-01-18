import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})

export class TestComponent implements OnInit {
  users: Observable<User[]>;
  stelios;
  goodBoy;
  selected = null;
  options: string[] = ['pepper', 'salt', 'paprika'];
  @Output() change = new EventEmitter();
  @Output() toggle = new EventEmitter();
  @Output() optionSelect = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('app-change') change2 = new EventEmitter();
  @Input() InappProperty;
  // tslint:disable-next-line:no-input-rename
  @Input('app-property') In2appProperty;

  @Input() sharedVar: string = '';
  @Output() sharedVarChange = new EventEmitter();

  constructor(private userService: UserService, private authService: AuthService) {
  }

  ngOnInit() {
    this.users = this.userService.getListUsers();
    // console.log(this.users);
    this.stelios = 'goodBoy';
    // console.log(this.selected);
  this.goodBoy = (this.stelios as string);
  this.optionSelect.emit(this.selected);

  // console.log(this.InappProperty);
  // this.simpleFunction();
  }

  onClick (event) {
    // console.log(event);
    this.change.emit(event);
    this.change2.emit(event);
  }

  onToggle () {
    // console.log('toggled!');
    this.toggle.emit();
  }

  onSelect (option) {
    this.optionSelect.emit(option);
    console.log(option);
  }

  onChange (event) {
    // console.log('onChange', event);
    this.sharedVar = event;
    this.sharedVarChange.emit(event);
  }

}
