import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarModule, Toolbar } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './sidemenu/sidemenu.component';

@NgModule({
  declarations: [
    FooterComponent, 
    HeaderComponent, 
    SidemenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  exports: [
    FooterComponent, 
    HeaderComponent,
    SidemenuComponent]
})
export class CommonModule { }
