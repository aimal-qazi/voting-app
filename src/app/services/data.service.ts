import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  toGetCandidate: any[] = [];
  toGetCity: any[] = [
    {
      name: 'assembly speaker',
    },
    {
      name: 'election manager',
    },
    {
      name: 'city councelor',
    },
  ];
  toGetCountry: any[] = [
    {
      name: 'prime minister',
    },
    {
      name: 'president',
    },
    {
      name: 'foreign Minister',
    },
  ];
  getDataOfCandidates: any[] = [];
  getlog: any[] = [];
  getUsers: any[] = [];

  private apiUrl = 'http://localhost:3000/signup';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.apiUrl);
  }
}
