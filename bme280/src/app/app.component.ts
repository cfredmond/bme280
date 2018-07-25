import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bme280 } from './bme280';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	bme280: Bme280;

  constructor(
  private http: HttpClient) { }

  ngOnInit() {
  	setInterval(() => {
  		this.http.get('/bme280').
  			subscribe((bme280: Bme280) => {
  				this.bme280 = bme280;
  			});
  	}, 10000);	
  }
}
