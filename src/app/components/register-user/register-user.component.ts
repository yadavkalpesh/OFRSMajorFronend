import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.user = this.fb.group(
      {
        userName: ['', [Validators.required]],
        userEmail: ['', [Validators.required]],
        contactNumber: ['', Validators.required],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]]
      }
    );
  }

  get userName() {
    return this.user.get('userName');
  }

  get userEmail() {
    return this.user.get('userEmail');
  }

  get password() {
    return this.user.get('password');
  }

  get contactNumber() {
    return this.user.get('contactNumber');
  }

  get confirmPassword() {
    return this.user.get('confirmPassword');
  }

  addUser() {
    console.log(this.user.value);
    return this.auth.addUser(this.user.value).subscribe(data => {
        this.user.reset();
        this.router.navigate(['login']);
        //alert("Check your email to verify your account!");
        Swal.fire({
          text: 'Check your email to verify your account!',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      },
      error => {
       // alert("User cannot be added !");
       Swal.fire({
        text: 'User cannot be added !',
        icon: 'error',
        confirmButtonText: 'OK'
      })
        console.log("Error occured during registration!");
        this.user.reset();
        console.log(error);
      }
    );
  }
}