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
    });
  }

  //signup functionality
  signup() {
    this._http
      .post<any>('http://localhost:3000/signup', this.signupForm.value)
      .subscribe(
        (res) => {
          alert('User signup Successfully');
          this.signupForm.reset();
          this.router.navigate(['login']);
        },
        (err) => {
          if (
            this.signupForm.value.name === '' &&
            this.signupForm.value.password === '' &&
            this.signupForm.value.email === ''
          ) {
            alert(err);
          }
        }
      );
  }
}
