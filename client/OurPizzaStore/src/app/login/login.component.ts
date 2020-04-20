import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {Subscription} from "rxjs";
import {DataService} from "../data.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  form:FormGroup;
  private getStatusUserSubscription: Subscription;

  constructor(private user:UserService, private route: Router, private _dataService: DataService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),

    })

  };

  submit(){
    if(this.form.valid){
      this.user.checkUser(this.form.value['email'], this.form.value['password']).subscribe(response=>{
        if(response['user']){
          this.user.login();
          this._dataService.setStatusUser(true);
          this._dataService.setUser(response['user']);
          this._dataService.setIdUser(response['user']._id)
          this.route.navigate(['/my-info'])



          // console.log(this.user.isAuthenticated())
        }

      }, error => {console.log(error); console.log('error');})
    }
  }

  ngOnDestroy() {

  }

}
