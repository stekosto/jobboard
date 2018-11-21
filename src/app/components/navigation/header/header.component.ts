import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  authStatus: boolean;
  authSubsription: Subscription;
  eventSubcription: Subscription;
  constructor(private eventService: EventService, private authService: AuthService) { }

  ngOnInit() {
    this.authSubsription = this.authService.authChange.subscribe((authStatus) => {
      this.authStatus = authStatus;
    });
  }

  toggleSdnav() {
    this.eventService.onSidenavToggle();
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.authSubsription.unsubscribe();
  }

}
