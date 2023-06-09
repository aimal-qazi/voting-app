import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getEmail: any[] = [];
  toGetSignUp: any[] = [];
  toGetLogin: any[] = [];
  toGetCityCandidate: any[] = [
    {
      name: 'imran',
      city: 'Islamabad',
      addcity: 'assembly speaker',
      votes: 0,
    },
    {
      name: 'riyaz',
      city: 'Karachi',
      addcity: 'city councelor',
      votes: 0,
    },
    {
      name: 'khanzada',
      city: 'Balochistan',
      addcity: 'city councelor',
      votes: 0,
    },
  ];
  toGetCountryCandidate: any[] = [
    {
      name: 'ahmad',
      city: 'Rawalpindi',
      addcountry: 'president',
      votes: 0,
    },
    {
      name: 'ashfaq',
      city: 'Quatta',
      addcountry: 'prime minister',
      votes: 0,
    },
    {
      name: 'aimal',
      city: 'Rawalpindi',
      addcountry: 'foreign Minister',
      votes: 0,
    },
  ];
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
}
