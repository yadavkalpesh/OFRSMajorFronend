import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterUser } from 'src/app/class/registerUser';
import { RegisterService } from 'src/app/shared/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {


  registerUser:RegisterUser = new RegisterUser();
  localuser:any=JSON.parse(localStorage.getItem('USER') || '{}');
  user:RegisterUser= JSON.parse(this.localuser);

  constructor(private registerService:RegisterService,private router:Router,private activeroute: ActivatedRoute) { }

  ngOnInit(): void {

    this.registerService.getUser(this.user.userId).subscribe(data =>{
      this.registerUser = data;
    }, error => console.log(error));
  }

  onClick(){
   
    this.router.navigate(['user/updateProfile']);
  }




}
