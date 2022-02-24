import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    userName: '',
    password: '',
    about: ''
  }
  formSubmit() {


    //Validate User Name
    if (this.user.userName == "" || this.user.userName == null) {
      // this._snackBar.open("unique User name is Required", "ok", {
      //   duration: 2000

      // });
      alert("User name is Required");
      return;
    }

    //Validate password
    if (this.user.password == "" || this.user.password == null) {
      // this._snackBar.open("password is Required", "ok", {
      //   duration: 2000

      // });
      alert("User password is Required");
      return;
    }


  }



}
