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
      isCityCandEdit: false,
    },
    {
      name: 'riyaz',
      city: 'Karachi',
      addcity: 'city councelor',
      votes: 0,
      isCityCandEdit: false,
    },
    {
      name: 'khanzada',
      city: 'Balochistan',
      addcity: 'city councelor',
      votes: 0,
      isCityCandEdit: false,
    },
  ];
  toGetCountryCandidate: any[] = [
    {
      name: 'ahmad',
      city: 'Rawalpindi',
      addcountry: 'president',
      votes: 0,
      isCountryCandEdit: false,
    },
    {
      name: 'ashfaq',
      city: 'Quatta',
      addcountry: 'prime minister',
      votes: 0,
      isCountryCandEdit: false,
    },
    {
      name: 'aimal',
      city: 'Rawalpindi',
      addcountry: 'foreign Minister',
      votes: 0,
      isCountryCandEdit: false,
    },
  ];
  toGetCity: any[] = [
    {
      name: 'assembly speaker',
      isCityEdit: false,
    },
    {
      name: 'election manager',
      isCityEdit: false,
    },
    {
      name: 'city councelor',
      isCityEdit: false,
    },
  ];
  toGetCountry: any[] = [
    {
      name: 'prime minister',
      isCountryEdit: false,
    },
    {
      name: 'president',
      isCountryEdit: false,
    },
    {
      name: 'foreign Minister',
      isCountryEdit: false,
    },
  ];
}
