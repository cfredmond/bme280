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
  private http: HttpClient) {
  	this.bme280 = {
      humidity: 0,
      pressure: 0,
      temperature: 0,
    };
  }

  ngOnInit() {
  	setInterval(() => {
  		this.http.get('/sensor-data').
  			subscribe((bme280: Bme280) => {
  				this.bme280 = bme280;
  			});
  	}, 5000);	
  }
}
