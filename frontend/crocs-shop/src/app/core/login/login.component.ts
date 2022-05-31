import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'name': new FormControl(
        null,
        [Validators.required]
      ),
      'password': new FormControl(
        null, 
        [Validators.required, Validators.minLength(8)])
    });
    console.log(this.loginForm.get('password')?.errors)
  }

  onLogin() {
    this.loginForm.reset();
  }

}
