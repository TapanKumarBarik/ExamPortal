import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  public loginStatusSubject = new Subject<boolean>();
  //generate token
  public generateToken(user: any) {
    return this.http.post(`${baseUrl}/generate-token`, user);
  }
  //get current user
  public getCurrentLoginUser() {
    return this.http.get(`${baseUrl}/current-user`);
  }
  //save token to locak storage
  public login(token: any) {
    localStorage.setItem('token', token);
    this.loginStatusSubject.next(true);
    return true;
  }

  //save token to locak storage
  public getToken() {
    return localStorage.getItem('token');
  }

  //check if login

  public isLoggedin() {
    let tokenStr = localStorage.getItem('token');

    if (tokenStr == '' || tokenStr == null || tokenStr == undefined) {
      return false;
    } else {
      return true;
    }
  }

  //logout
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userLocalData');
    return true;
  }

  //set user

  public setUser(user: any) {
    localStorage.setItem('userLocalData', JSON.stringify(user));
    return true;
  }

  //get user;

  public getUser() {
    let userStr = localStorage.getItem('userLocalData');

    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //GET USER ROLE
  public getUserRole() {
    let user = this.getUser();

    return user.authorities[0].authority;
  }

  //GET USER Name
  public getUserName() {
    let user = this.getUser();

    return user.userName;
  }
}
