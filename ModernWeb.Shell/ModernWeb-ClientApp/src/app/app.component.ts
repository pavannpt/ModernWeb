import { Component, OnInit } from '@angular/core';
import { BroadcastService, MsalService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MSAL - Angular 8 Sample App';
  isIframe = false;
  loggedIn = false;
  private subscription:Subscription;
  
  constructor(private broadcastService: BroadcastService, private authService: MsalService) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.checkoutAccount();

    this.broadcastService.subscribe('msal:loginSuccess', () => {
      this.checkoutAccount();
    });

    this.authService.handleRedirectCallback((authError, response) => {
      if (authError) {
        console.error('Redirect Error: ', authError.errorMessage);
        return;
      }

      console.log('Redirect Success: ', response);
    });

    this.broadcastService.subscribe("msal:acquireTokenSuccess", payload => {
      console.log(payload);
    });
    
    this.broadcastService.subscribe("msal:acquireTokenFailure", payload => {
        console.log(payload);
    });

    this.authService.setLogger(new Logger((logLevel, message, piiEnabled) => {
      console.log('MSAL Logging: ', message);
    }, {
      correlationId: CryptoUtils.createNewGuid(),
      piiLoggingEnabled: false
    }));
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
  }

  login() {
    const isIE = true;//window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;

    if (isIE) {
      this.authService.loginRedirect();
    } else {
      this.authService.loginPopup();
    }
  }

  logout() {
    this.authService.logout();
  }

  ngDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
