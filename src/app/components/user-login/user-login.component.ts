import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  constructor(private httpClient:HttpClient, private auth:AuthService, private router : Router, private fb : FormBuilder) { }
  
  user:any;
  response:any;
  loading!:false;
  flag=false;
  message!:string;
  captcha:boolean=false;

  newflag:boolean=true;


  ngOnInit(): void {
    this.user = this.fb.group(
      {
      userEmail:['',[Validators.required]],
      password:['',[Validators.required]]
    }
    );
  }

  public resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`); 
      this.captcha=true;
  }


  // verifyOtp(){
  //   this.auth.verifyOtp(this.otpCred).subscribe(response=>{
      
  //     console.log(response)
  //     if(response===true){
  //       this.message="Otp verified succesfully!!!";
  //       this.responseOtp=response;
  //       this.router.navigate(['home']);
  //     }
  //   },error=>{
  //     this.message="Invalid otp!!!!!";
  //   })
  // }

  // sendOtp(contact:any){
  //   this.otpCred.contact="+91"+contact;
  //   this.auth.sendOtp(this.otpCred.contact).subscribe(response=>{
  //       if(response===false){
  //         this.flag=true;
  //         this.message="Otp sent to =>+91"+this.otpCred.contact;
  //       }
  //   },error=>{
  //     this.message="Cannot send otp..."
  //   })
  // }


  get userEmail(){
    return this.user.get('userEmail');
  }

  get password(){
    return this.user.get('password');
  }

userObj!:User;
idl:any;
otp:any;
hasOtp:boolean=false; 
hasError:boolean=false;
otpVal = '';
role:any='';

  login(){
    if(this.otp == this.otpVal){
      this.auth.findByuserEmail(this.user.value.userEmail).subscribe(data=>{localStorage.setItem('USER',JSON.stringify(data))});
      this.role=JSON.parse(JSON.parse(localStorage.getItem('USER') || ''));
      console.log(this.role.role);
      console.log(this.otpVal);
      Swal.fire({
        text: 'Login Succesfull!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      if(this.role.role == 'ADMIN'){
        this.router.navigate(['admin/flights']);
      }
      else{
        this.router.navigate(['user/userSearchFlight']);
      }

     
    }
    else{
      Swal.fire({
        text: 'Wrong Otp!',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      this.router.navigate(['login']);
    }
  }

  public generateToken() {
    this.newflag=false;
   
    this.auth.getOtp(this.user.value).subscribe(
      (otp) => {
        console.log(otp);
        
        this.otp = otp;
        this.hasOtp = true;
        this.flag = true;
      }, 
      (error) => {
        console.log(error);
        this.hasError = true;
        Swal.fire({
          text: 'Wrong credentials!',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      }
    );
}
}