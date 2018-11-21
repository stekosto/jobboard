import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor(private eventService: EventService) { }
  title = 'job-board';
  @ViewChild('sidenav') sidenav;

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.eventService.sidenavToggle.subscribe(() => {
      this.sidenav.toggle();
    });
    this.eventService.sidenavClose.subscribe(() => {
      this.sidenav.close();
    });
 }

}
