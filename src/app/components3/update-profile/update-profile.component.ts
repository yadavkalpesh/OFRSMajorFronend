import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterUser } from 'src/app/class/registerUser';
import { RegisterService } from 'src/app/shared/register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {

  registerUser:RegisterUser = new RegisterUser();
  localuser:any=JSON.parse(localStorage.getItem('USER') || '{}');
  user:RegisterUser= JSON.parse(this.localuser);


  constructor(private registerService:RegisterService,private router:Router,private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.id = this.activeroute.snapshot.params[`id`];
    this.registerService.getUser(this.user.userId).subscribe(data =>{
      this.registerUser = data;
    }, error => console.log(error));
  }



  updateProfile(){
    this.registerService.updateUser(this.user.userId,this.registerUser)
    .subscribe(data => {
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateProfile();
    // alert("Offer Updated!!")
    Swal.fire({
      text: 'User Updated!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['user/myProfile']);

  }

}
