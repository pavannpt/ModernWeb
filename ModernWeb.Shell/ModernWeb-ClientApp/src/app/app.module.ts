import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatToolbarModule, MatButtonModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';


import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

export const protectedResourceMap:[string, string[]][]= [
  ['https://graph.microsoft.com/v1.0/me', ['user.read']],
  ['https://localhost:44308/', [ 'api://e314b8a2-30f8-4306-9aef-c72a3a0b92b8/api-access' ]]
];

const isIE = window.navigator.userAgent.indexOf("MSIE ") > -1 || window.navigator.userAgent.indexOf("Trident/") > -1;

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    AppRoutingModule,
    MsalModule.forRoot({
      auth: {
        clientId: '29508407-0975-47d8-bbe0-e17da92238fe',
        authority: "https://login.microsoftonline.com/4776ad8b-8d9f-46e4-996a-d36ce4a752d8/",
        validateAuthority: true,
        redirectUri: "http://localhost:4200/",
        postLogoutRedirectUri: "http://localhost:4200/",
        navigateToLoginRequestUrl: true,
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: isIE, // set to true for IE 11
      },
    },
    {
      popUp: false,
      consentScopes: [
        'user.read',
        'openid',
        'profile',
      ],
      protectedResourceMap: protectedResourceMap,
      extraQueryParameters: {}
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
