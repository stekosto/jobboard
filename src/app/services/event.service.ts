import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  sidenavToggle = new Subject<void>();
  sidenavClose = new Subject<void>();
  constructor() { }

  onSidenavToggle() {
    this.sidenavToggle.next();
  }

  onSidenavClose() {
    this.sidenavClose.next();
  }
}
