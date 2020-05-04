import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subscription, Subject } from 'rxjs';


@Component({
  selector: 'common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isIframe = false;
  @Input() loggedIn:boolean;
  @Output() LogoutEvent = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    
  }
  logout() {debugger;
    this.LogoutEvent.emit("");
  }
}
