import { Component, OnDestroy, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { MsalService } from '@azure/msal-angular';
import { AuthService } from './services/auth.service';
import { CommonService } from 'modernweb-common-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, AfterViewInit {
  title = 'Modern Web';
  hideLogin = false;
  private subscription: Subscription;

  constructor(private commonService: CommonService, 
    private cdef: ChangeDetectorRef,
    private msalService: MsalService,
    private authService:AuthService) { }
  

  ngOnInit() {
    setTimeout(() => {
      this.subscription = this.authService.GetLoginEvent().subscribe(data => {
        this.hideLogin = data;
      });
    });
  }

  ngAfterViewInit() {
    this.hideLogin = !!this.msalService.getAccount();    
  }

  onLoggedOut(){
    this.hideLogin = false;
    this.msalService.logout();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
