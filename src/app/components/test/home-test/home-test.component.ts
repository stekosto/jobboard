import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-test',
  templateUrl: './home-test.component.html',
  styleUrls: ['./home-test.component.scss']
})
export class HomeTestComponent implements OnInit {

  toggle: boolean = true;
  viewMode: string = null;
  appProperty: {value1: string, value2: Object[], value3: string[],
    value4: Object} = {
    value1: 'DemoValue',
    value2: [ {val: 'skata'}, {val: 34}],
    value3: ['dfasdfsa', 'fgdfgdfsdgsf'],
    value4: {val: 'DemoValue1', val2: 5, val3: [2, 5, {valaval: 'Domineer'}],  val4: {valval: 'kaka'}}
  };
  constructor() { }

  ngOnInit() {
  }

  onChanged (event) {
    console.log('Y: ' + event.clientY);
    console.log('X: ' + event.clientX);
  }

  onToggle () {
    console.log('home onToggle' + this.toggle);
    this.toggle = !this.toggle;
  }

  onViewMode(viewMode) {
    console.log('home', viewMode);
    this.viewMode = viewMode;
  }

  // onChangeSelect () {
  //   this.viewMode = 'pepper';
  // }

}
