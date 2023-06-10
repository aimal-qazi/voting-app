import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  showAddCand = false;
  showViewCand = false;
  showAddPos = false;
  showViewPos = false;
  showViewUser = false;
  showCityPosEdit = false;
  showCountryPosEdit = false;
  showCityCandEdit = false;
  showCountryCandEdit = false;
  cityPosName = '';
  upCityPosName = '';
  candidatePos = '';

  addingCityCandidate: any[] = [];
  addingCountryCandidate: any[] = [];
  inCity = [
    'Islamabad',
    'Rawalpindi',
    'Karachi',
    'Sindh',
    'Quatta',
    'Peshawar',
    'Nowshera',
    'Gilgit',
    'Kashmir',
    'Balochistan',
  ];
  city: any[] = [];
  country: any[] = [];
  addingUsers: any[] = [];

  CitycandidateForm!: FormGroup;
  CountrycandidateForm!: FormGroup;
  countryForm!: FormGroup;
  cityForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    this.addingCityCandidate = dataService.toGetCityCandidate;
    this.addingCountryCandidate = dataService.toGetCountryCandidate;
    this.city = dataService.toGetCity;
    this.country = dataService.toGetCountry;
  }
  ngOnInit(): void {
    for (let i = 0; i < this.dataService.toGetSignUp.length; i++) {
      const getData = this.dataService.toGetSignUp;
      this.addingUsers.push(getData[i]);
    }
    console.log(this.addingUsers);

    this.CitycandidateForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      addcity: new FormControl('', Validators.required),
      votes: new FormControl(0),
    });
    this.CountrycandidateForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      addcountry: new FormControl('', Validators.required),
      votes: new FormControl(0),
    });
    this.countryForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
    });
    this.cityForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
    });
  }
  toCity() {
    const getCity = this.cityForm.getRawValue();
    this.dataService.toGetCity.push(getCity);
    this.cityForm.reset();
    alert('city position is been added in the position list');
  }
  toCountry() {
    const getCountry = this.countryForm.getRawValue();
    this.dataService.toGetCountry.push(getCountry);
    this.countryForm.reset();
    alert('country position is been added in the position list');
  }
  addingCityCand() {
    const getCand = this.CitycandidateForm.getRawValue();
    this.dataService.toGetCityCandidate.push(getCand);
    this.CitycandidateForm.reset();
  }
  addingCountryCand() {
    const getCand = this.CountrycandidateForm.getRawValue();
    this.dataService.toGetCountryCandidate.push(getCand);
    this.CountrycandidateForm.reset();
  }
  onAddCandidate() {
    alert('candidate is been added');
  }
  delPosCity(i: number) {
    this.city.splice(i, 1);
  }
  delPosCountry(i: number) {
    this.country.splice(i, 1);
  }
  delCityCan(i: number) {
    this.addingCityCandidate.splice(i, 1);
  }
  delCountryCan(i: number) {
    this.addingCityCandidate.splice(i, 1);
  }
  show1() {
    this.showAddCand = true;
    this.showAddPos = false;
    this.showViewPos = false;
    this.showViewCand = false;
    this.showViewUser = false;
  }
  show2() {
    this.showAddCand = false;
    this.showAddPos = true;
    this.showViewPos = false;
    this.showViewCand = false;
    this.showViewUser = false;
  }
  show3() {
    this.showAddCand = false;
    this.showAddPos = false;
    this.showViewPos = true;
    this.showViewCand = false;
    this.showViewUser = false;
  }
  show4() {
    this.showAddCand = false;
    this.showAddPos = false;
    this.showViewPos = false;
    this.showViewCand = true;
    this.showViewUser = false;
  }
  show5() {
    this.showAddCand = false;
    this.showAddPos = false;
    this.showViewPos = false;
    this.showViewCand = false;
    this.showViewUser = true;
  }
  editCityPos(name: string) {
    this.showViewPos = false;
    this.showCityPosEdit = !this.showCityPosEdit;
  }
  updateCityPos() {
    let i = 0;
    this.showCityPosEdit = false;
    let currentCity = this.city.find((p) => p.name === name);
    this.dataService.toGetCityCandidate[i].name = currentCity;
  }
  editCountryPos() {
    this.showViewPos = false;
    this.showCountryPosEdit = !this.showCountryPosEdit;
  }
  editCityCandidate() {
    this.showViewCand = false;
    this.showCityCandEdit = !this.showCityCandEdit;
  }
  editCountryCandidate() {
    this.showViewCand = false;
    this.showCountryCandEdit = !this.showCountryCandEdit;
  }
}
