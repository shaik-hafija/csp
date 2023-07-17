import { Component, OnDestroy, OnInit } from '@angular/core';
import { Logininterface, Signupinterface, Flower, UniqueConstraintError, InsertedSuccess } from './flower';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

import { FlowerservicwService } from './flowerservicw.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy, OnInit {
  a = true;//starting nav bar
  constructor(private service: FlowerservicwService) { }
  c = false;//registration
  d = false;//login
  e = false;//home page
  error = false;
  title = 'csp';
  signin() {
    this.a = false;
    this.c = true;
    this.d=false;
  }
  login() {
    this.d = true;
    this.a = false;
    this.c = false;
    this.e = false;

  }
  signup: Signupinterface = {
    name: '',
    email: '',
    password: ''
  };
  loginform: Logininterface = {
    email: '',
    password: ''
  }
logout()
{
  this.a=true;
  this.c=false;
  this.d=false;
  this.e=false;
  

}
  readarray = [];
  ngOnInit(): void { }
  Subscription: Subscription = new Subscription();
  SuccessMsg = '';
  ErrorMsg = '';

  Insert(Form: NgForm) {
    console.log(Form.value);

    this.Subscription = this.service.Insert1(Form.value).subscribe({
      next: (Data: InsertedSuccess | UniqueConstraintError) => {
        if ('errorNum' in Data) {
          this.ErrorMsg = `${this.signup.email} alredy Exists`;
        } else {
          this.SuccessMsg = `${this.signup.email} Inserted Succesfully`;


        }
        Form.reset();

      }
    }
    )
  }
  Read() {
    this.Subscription = this.service.Read3(this.loginform.email).subscribe(
      (data: any) => {
        this.readarray = data.rows[0];
        console.log(this.readarray);
        if (data.rows[0]) {
          if (this.readarray[2] == this.loginform.password) {
            this.a = false;
            this.e = true;
            this.c = false;
            this.d = false;
          }
          else {
            this.error = true;
          }
        }
        else {
          this.error = true;

        }
      })
  }
  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }
}


