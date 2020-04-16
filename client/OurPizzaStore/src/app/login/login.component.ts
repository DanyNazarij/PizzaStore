import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private user:UserService) { }

  ngOnInit(): void {


    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

    })
  };

  submit(){
    if(this.form.valid){
      this.user.checkUser(this.form.value['email'], this.form.value['password']).subscribe(response=>{
        console.log(response);

      }, error => {console.log(error)})
    }
  }

}
