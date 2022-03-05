import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar, private login: LoginService,private route:Router) {}

  ngOnInit(): void {}

  public loginData = {
    username: '',
    password: '',
  };
  formSubmit() {
    //Validate User Name
    if (
      this.loginData.username.trim() == '' ||
      this.loginData.username == null
    ) {
      this._snackBar.open('User name is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    //Validate password
    if (
      this.loginData.password.trim() == '' ||
      this.loginData.password == null
    ) {
      this._snackBar.open('password is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    //generate token
    this.login.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.login.login(data.token);
        console.log(data);

        //call the get user details method
        this.login.getCurrentLoginUser().subscribe(
          (data1: any) => {
            this.login.setUser(data1);

            if (this.login.getUserRole() == 'ADMIN') {

              window.location.href="/admin-dashboard";
             //this.route.navigate(['admin-dashboard']);
            // this.login.loginStatusSubject.next(true);
            }

            //ELSE
            else if (this.login.getUserRole() == 'NORMAL') {
               window.location.href="/user-dashboard";
             // this.route.navigate(['user-dashboard']);
              //this.login.loginStatusSubject.next(true);
            } else {
              this.login.logout();
            }
          },
          (error1: any) => {
            console.error(error1);
            return;
          }
        );
        //call the get user details method end
      },
      (error: any) => {
        console.error(error);
        this._snackBar.open('Invalid details', 'error', {
          duration: 2000,
        });
        return;
      }
    );
  }
}
