import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService) { }

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
    // console.table(this.user);


    this.userService.addUser(this.user).subscribe(
      data => {
        console.table(data);
        alert("success")
      }


      // ,
      // (error) => {
      //   console.error(error);
      //   alert("something went wrong");
      // }
    )

  }

}
