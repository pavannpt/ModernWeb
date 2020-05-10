import { Component, OnInit, AfterViewChecked, Output, EventEmitter, Input } from '@angular/core';


@Component({
  selector: 'common-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewChecked   {
  isIframe = false;
  @Output() onLogout:EventEmitter<any> = new EventEmitter();
  @Input() showLogout:boolean = true;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  ngAfterViewChecked(): void {
   //this.cdRef.detectChanges();
  }

  logout() {
    //this.commonService.EmitLogOutEvent();
    this.onLogout.emit(null);
  }
}
