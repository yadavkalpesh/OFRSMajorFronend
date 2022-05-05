import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  user:User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  forgotPassword(){}

}
