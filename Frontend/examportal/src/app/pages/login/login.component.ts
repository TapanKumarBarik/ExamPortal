import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private loginService: LoginService
  ) {}

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
    this.loginService.generateToken(this.loginData).subscribe({
      next(data) {
        console.table(data);
      },
      error(error) {
        console.error(error);
      },
    });
  }
}
