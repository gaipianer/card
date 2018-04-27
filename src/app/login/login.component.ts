import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _userName: string;
  _password: string;

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(this._userName, [
        Validators.required,
        Validators.minLength(6)
      ]),
      'password': new FormControl(this._password, [
        Validators.required,
        Validators.minLength(4)
      ])
    });
  }

  get userName() {
    return this.loginForm.get('userName');
  }

  get password() {
    return this.loginForm.get('password');
  }

}
