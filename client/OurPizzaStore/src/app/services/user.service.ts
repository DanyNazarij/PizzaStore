import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";


export interface UserI {
  id?: String,
  discount?: Number,
  name: String,
  email: String,
  phone: String,
  password: String,
  address: String,
  birthday: Date
  order?: any[]

}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }


  checkUser(email, password) {
    return this.httpClient.post('http://localhost:9000/userApi/check', {email, password});
  }

  register(userName: string, email: string, phone: string, address: string, dateOfBirth: Date, password: string): Observable<any> {
    let user: UserI = {
      name: userName,
      email: email,
      phone: phone,
      address: address,
      birthday: dateOfBirth,
      password: password
    }
    return this.httpClient.post("http://localhost:9000/userApi/add", user);
  }
}
