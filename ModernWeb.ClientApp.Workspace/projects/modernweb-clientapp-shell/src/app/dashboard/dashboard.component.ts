import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    debugger;
    this.http.get("https://localhost:44308/WeatherForecast").subscribe(data => {
      alert(data);
    });
  }

}
