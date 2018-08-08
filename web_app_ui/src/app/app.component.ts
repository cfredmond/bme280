import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bme280 } from './bme280';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	bme280: Bme280;
  chart: any;

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

    setInterval(() => {
      this.http.get('/log').
        subscribe((resp: any) => {
          console.log(resp);

          let created_dates = [];
          let temperatures = [];

          resp.forEach(el => {
            created_dates.push(el.created_date);
            temperatures.push(el.temperature);
          });

          this.chart = new Chart('canvas', {
              type: 'line',
              data: {
                  labels: created_dates,
                  datasets: [{
                      label: '# of Votes',
                      data: temperatures,
                      backgroundColor: [
                          'rgba(255, 99, 132, 0.2)',
                          'rgba(54, 162, 235, 0.2)',
                          'rgba(255, 206, 86, 0.2)',
                          'rgba(75, 192, 192, 0.2)',
                          'rgba(153, 102, 255, 0.2)',
                          'rgba(255, 159, 64, 0.2)'
                      ],
                      borderColor: [
                          'rgba(255,99,132,1)',
                          'rgba(54, 162, 235, 1)',
                          'rgba(255, 206, 86, 1)',
                          'rgba(75, 192, 192, 1)',
                          'rgba(153, 102, 255, 1)',
                          'rgba(255, 159, 64, 1)'
                      ],
                      borderWidth: 1
                  }]
              },
              options: {
                  scales: {
                      yAxes: [{
                          ticks: {
                              beginAtZero:true
                          }
                      }]
                  }
              }
          });
        });
    }, 60000);	
  }
}
