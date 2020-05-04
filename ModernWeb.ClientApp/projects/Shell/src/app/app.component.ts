import { Component } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ModernWeb';
  isIframe = false;
  loggedIn = true;
  private subscription:Subscription;
  
  constructor(private broadcastService: BroadcastService, private authService: MsalService) { }

  ngOnInit() {
    
  }

  onLoggedIn(){
    this.loggedIn = true;
  }

  onLoggedOut(){debugger;
    this.loggedIn = false;
  }
}
