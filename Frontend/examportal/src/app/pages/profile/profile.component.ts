import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private login:LoginService) { }
  public user = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNo: '',
    userName: '',
    id:0,
    about: '',
    enabled:false,
    authorities:[{
      authority:""
    }]
  };
  ngOnInit(): void {

    this.user=this.login.getUser();
  }

}
