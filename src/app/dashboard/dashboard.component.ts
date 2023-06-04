import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MainComponent],
})
export class DashboardComponent implements OnInit {
  gettingCandidate: any[] = [];
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.gettingCandidate = this.dataService.getDataOfCandidates;
  }
}
