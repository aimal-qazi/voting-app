import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  dataofCity: any[] = [];
  dataofCountry: any[] = [];
  constructor(private dataSource: DataService) {}
  ngOnInit(): void {
    for (let i = 0; i < this.dataSource.toGetCityCandidate.length; i++) {
      this.dataofCity.push(this.dataSource.toGetCityCandidate[i]);
    }
    for (let i = 0; i < this.dataSource.toGetCountryCandidate.length; i++) {
      this.dataofCountry.push(this.dataSource.toGetCountryCandidate[i]);
    }
  }
}
