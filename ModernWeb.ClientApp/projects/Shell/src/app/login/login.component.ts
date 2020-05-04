import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Logger, CryptoUtils } from 'msal';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedIn = false;
  isIframe = false;
  private subscription:Subscription;
  @Output() LogInEvent = new EventEmitter();
  @Output() LogOutEvent = new EventEmitter();
  
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

  login() {
    debugger;
    const isIE = true;

    if (isIE) {
      this.authService.loginRedirect();
    } else {
      this.authService.loginPopup();
    }
  }

  checkoutAccount() {
    this.loggedIn = !!this.authService.getAccount();
    if(this.loggedIn)
      this.LogInEvent.emit();
    else
      this.LogOutEvent.emit();
  }

  ngDestroy(){
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
