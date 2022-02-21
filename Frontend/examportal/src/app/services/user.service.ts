import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {

  }


  // add user 
  public addUser(user: any) {

    return this.http.post("http://localhost:8080/user/", user);
    //return this.http.post(`${baseUrl}/user`, user);
    //http://localhost:8080/user/tapanbarik9937
  }
}
