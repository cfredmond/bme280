import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
  private http: HttpClient) { }

  ngOnInit() {
  	setInterval(() => {
  		this.http.get('/bme280').
  			subscribe(data => console.log(data));
  	}, 15000);	
  }
}
