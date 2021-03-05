import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Swal from 'sweetalert2';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  submitForm(evt: Event) {

    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    evt.preventDefault();
    if (this.loginForm.controls.email.value != 'wendryl10000@gmail.com' || this.loginForm.controls.password.value != '123123') {
      setTimeout(() => {
        return Swal.default.fire('Error!', 'Email or password invalid!', 'error');
      }, 3000)
    }
  }

}
