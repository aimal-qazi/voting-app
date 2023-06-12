import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { DataService } from '../services/data.service';
import { flush } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MainComponent],
})
export class DashboardComponent implements OnInit {
  gettingCityCandidate: any[] = [];
  gettingCountryCandidate: any[] = [];
  gettingUsers: any[] = [];
  gettingLoggedUser: any[] = [];

  cityVotes = 0;
  countryVotes = 0;
  Voted = true;
  cli = true;

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.gettingCityCandidate = this.dataService.toGetCityCandidate;
    this.gettingCountryCandidate = this.dataService.toGetCountryCandidate;
    this.gettingUsers = this.dataService.toGetSignUp;
    this.gettingLoggedUser = this.dataService.toGetLogin;
  }

  toCityVote(index: number) {
    this.dataService.toGetSignUp.forEach((a, b) => {
      if (
        a.isVoted.includes(
          this.dataService.toGetCityCandidate[index].addcity
        ) &&
        b == this.dataService.toGetSignUp.length - 1
      ) {
        alert(
          `you already voted to ${this.dataService.toGetCityCandidate[index].addcity}`
        );
        return;
      } else if (b == this.dataService.toGetSignUp.length - 1) {
        this.dataService.toGetSignUp[b].cityVote?.push(
          this.dataService.toGetCityCandidate[index].name
        );
        this.dataService.toGetCityCandidate[index].votes++;
        a.isVoted.push(this.dataService.toGetCityCandidate[index].addcity);
        alert(
          `Vote Casted Successfully for ${this.dataService.toGetCityCandidate[index].addcity}`
        );
      }
    });
  }

  toCountryVote(index: number) {
    this.dataService.toGetSignUp.forEach((a, b) => {
      if (
        a.isVoted.includes(
          this.dataService.toGetCountryCandidate[index].addcountry
        ) &&
        b == this.dataService.toGetSignUp.length - 1
      ) {
        alert(
          `you already voted to ${this.dataService.toGetCityCandidate[index].addcity}`
        );
        return;
      } else if (b == this.dataService.toGetSignUp.length - 1) {
        this.dataService.toGetSignUp[b].countryVotes?.push(
          this.dataService.toGetCountryCandidate[index].name
        );
        this.dataService.toGetCountryCandidate[index].votes++;
        a.isVoted.push(
          this.dataService.toGetCountryCandidate[index].addcountry
        );
        alert(
          `Vote Casted Successfully for ${this.dataService.toGetCountryCandidate[index].addcountry}`
        );
      }
    });
  }
}
