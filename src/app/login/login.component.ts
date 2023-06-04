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
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.dataLog.getlog.push(this.getLogged);
  }
  login() {
    this._http.get<any>('http://localhost:3000/signup').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login Successfully');
          this.loginForm.reset();
          this.router.navigate(['dashboard']);
          this.getLogged.push(user);
        } else if (
          this.loginForm.value.email === 'admin' &&
          this.loginForm.value.password === 'admin'
        ) {
          alert('Admin logged Successfully');
          this.loginForm.reset();
          this.router.navigate(['main']);
        } else {
          alert('Invalid');
        }
      },
      (err) => {
        alert('Invalid');
      }
    );
  }
}
