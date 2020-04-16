import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";


export interface UserI {
  id: String,
  discount: Number,
  name: String,
  email: String,
  phone:String,
  password: String,
  address:String,
  birthday:Date
  order?: any[]

}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  checkUser(email, password) {
    // let params = new HttpParams();
    // params.append('email', email);
    // params.append('password', password);


    return this.httpClient.post('http://localhost:9000/userApi/check', {email, password});
  }
}
