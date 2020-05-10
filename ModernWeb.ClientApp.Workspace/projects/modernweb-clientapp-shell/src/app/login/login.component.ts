import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedIn = false;
  isIframe = false;
  private subscription:Subscription;
  
  constructor(private broadcastService: BroadcastService, private msalService: MsalService, private authService:AuthService) { }

  ngOnInit() {
    this.isIframe = window !== window.parent && !window.opener;

    this.checkoutAccount();

    this.broadcastService.subscribe('msal:loginSuccess', () => {
      this.checkoutAccount();
    });

    this.msalService.handleRedirectCallback((authError, response) => {
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

    this.msalService.setLogger(new Logger((logLevel, message, piiEnabled) => {
      console.log('MSAL Logging: ', message);
    }, {
      correlationId: CryptoUtils.createNewGuid(),
      piiLoggingEnabled: false
    }));
  }

  login() {
    const isIE = true;

    if (isIE) {
      this.msalService.loginRedirect();
    } else {
      this.msalService.loginPopup();
    }
  }

  checkoutAccount() {
    this.loggedIn = !!this.msalService.getAccount();
    if(this.loggedIn)
      this.authService.EmitLoginEvent(true);
    else
      this.authService.EmitLoginEvent(false);
  }

  ngDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
