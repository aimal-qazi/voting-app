import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  getLogged: any[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private _http: HttpClient,
    private router: Router,
    private dataLog: DataService
  ) {
    this.getLogged = dataLog.toGetLogin;
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    const getData = this.loginForm.getRawValue();
    this.dataLog.getEmail.push(getData.email);
    console.log(this.dataLog.getEmail);

    this.dataLog.toGetLogin.push(getData);
    this.loginForm.reset();
    if (getData.email == 'admin' && getData.password == 'admin') {
      alert('Admin Successfully');
      this.router.navigate(['/main']);
    }
    for (let i = 0; i < this.dataLog.toGetSignUp.length; i++) {
      if (
        getData.email === this.dataLog.toGetSignUp[i].email &&
        getData.password === this.dataLog.toGetSignUp[i].password
      ) {
        alert('login successfully');
        this.router.navigate(['/dashboard']);
      }
    }
  }
}
