import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getDataOfCandidates: any[] = [];
  getlog: any[] = [];

  private apiUrl = 'http://localhost:3000/signup';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any>(this.apiUrl);
  }
}
