import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  authStatus: boolean;
  constructor(private eventService: EventService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.authChange.subscribe( authValue => {
      this.authStatus = authValue;
    });
  }

  onCloseSdnav() {
    this.eventService.onSidenavClose();
  }

  onLogout() {
    this.authService.logout();
    this.eventService.onSidenavClose();
  }

}
