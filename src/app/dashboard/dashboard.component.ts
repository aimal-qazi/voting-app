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
  gettingUsers: any[] = [];
  gettingLoggedUser: any[] = [];
  votes = 0;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.gettingCandidate = this.dataService.toGetCandidate;
    this.dataService.getData().subscribe((data) => {
      for (let i = 0; i < data.length; i++) {
        this.gettingUsers.push(data[i]);
      }
      for (let j = 0; j < this.dataService.getlog.length; j++) {
        this.gettingLoggedUser.push(this.dataService.getlog[j]);
      }
    });
  }

  toVote() {
    this.votes = this.votes + 1;
  }
}
