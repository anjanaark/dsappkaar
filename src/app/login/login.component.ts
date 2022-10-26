import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'LOGIN';
  exform: FormGroup;
  ngOnInit() {

    this.exform = new FormGroup({
      'name' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.required, Validators.email]),
      'password' : new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ])
    });
    }
  
    clicksub() {
      console.log(this.exform.value);
      this.exform.reset();
    }
    get name() {
      return this.exform.get('name');
    }
    get email() {
      return this.exform.get('email');
    }
    get password() {
      return this.exform.get('password');
    }

}
