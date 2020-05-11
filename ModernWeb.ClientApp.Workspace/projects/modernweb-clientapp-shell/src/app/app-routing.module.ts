import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MsalGuard } from '@azure/msal-angular';
import { WorkflowsComponent } from '@modernweb/ngprime-lib';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [
      MsalGuard
    ] 
  },
  {
    path: 'Prime',
    component: WorkflowsComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    path: 'PhotoGallery',
    loadChildren: () => import('@modernweb/photogallery-lib').then(m=>m.PhotoGalleryModule),
    canActivate: [
      MsalGuard
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }