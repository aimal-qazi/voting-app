import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router,
    private usersData: DataService
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      countryVote: [[]],
      cityVote: [[]],
      isVoted: [[]],
    });
  }

  //signup functionality
  signup() {
    const getData = this.signupForm.getRawValue();
    this.usersData.toGetSignUp.push(getData);
    alert('Register Successfully');
    this.router.navigate(['/login']);
    this.signupForm.reset();
  }
}
