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

  addingCandidate: any[] = [];
  city: any[] = [];
  country: any[] = [];
  addingUsers: any[] = [];

  candidateForm!: FormGroup;
  countryForm!: FormGroup;
  cityForm!: FormGroup;

  constructor(
    private dataService: DataService,
    private formBuilder: FormBuilder
  ) {
    dataService.getDataOfCandidates = this.addingCandidate;
  }
  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (data: any) => {
        for (let i = 0; i < data.length; i++) {
          this.addingUsers.push(data[i]);
        }
      },
      (err) => {
        console.log(err);
      }
    );
    this.candidateForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      addcity: new FormControl('', Validators.required),
      addcountry: new FormControl('', Validators.required),
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
    this.city.push(getCity);
    this.cityForm.reset();
    alert('city position is been added in the position list');
  }
  toCountry() {
    const getCountry = this.countryForm.getRawValue();
    this.country.push(getCountry);
    this.countryForm.reset();
    alert('country position is been added in the position list');
  }
  addingCand() {
    const getCand = this.candidateForm.getRawValue();
    this.addingCandidate.push(getCand);
  }
  delPosCity(i: number) {
    this.city.splice(i, 1);
  }
  delPosCountry(i: number) {
    this.country.splice(i, 1);
  }
  delCan(i: number) {
    this.addingCandidate.splice(i, 1);
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
}
