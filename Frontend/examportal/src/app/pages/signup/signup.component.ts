import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(
    private userService: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  public user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    userName: '',
    password: '',
    about: '',
  };
  formSubmit() {
    //validate First Name
    if (this.user.firstName == '' || this.user.firstName == null) {
      this._snackBar.open('User First name is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    //validate Last Name
    if (this.user.lastName == '' || this.user.lastName == null) {
      this._snackBar.open('User Last name is Required', 'ok', {
        duration: 2000,
      });
      return;
    }
    //validate Email
    if (this.user.email == '' || this.user.email == null) {
      this._snackBar.open('User Email is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    //Validate Phone no
    if (this.user.phoneNo == '' || this.user.phoneNo == null) {
      this._snackBar.open('User Phone no is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    //Validate User Name
    if (this.user.userName == '' || this.user.userName == null) {
      this._snackBar.open('unique User name is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    //Validate password
    if (this.user.password == '' || this.user.password == null) {
      this._snackBar.open('password is Required', 'ok', {
        duration: 2000,
      });
      return;
    }

    this.userService.addUser(this.user).subscribe({
      next(data) {
        // alert("success")
        Swal.fire('Good job!', 'You clicked the button!', 'success');
      },
      error(error) {
        console.error(error);
        //alert("something went wrong");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>',
        });
      },
    });
  }
}
