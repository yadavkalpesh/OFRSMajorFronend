import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Complain } from 'src/app/class/complain';
import { RegisterUser } from 'src/app/class/registerUser';
import Swal from 'sweetalert2';
import { ComplainService } from '../service/complain.service';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.scss']
})
export class ComplainComponent implements OnInit {

  constructor(private complainService:ComplainService,private router: Router, private fb: FormBuilder, private activeroute: ActivatedRoute) { }

  complain:Complain = new Complain();

  

  localuser:any=JSON.parse(localStorage.getItem('USER') || '{}');
  //userId:any = localStorage.getItem('UserId');  
  userObj:any = JSON.parse(JSON.parse(localStorage.getItem('USER') || ''));
  ngOnInit(): void {
  }

  
  onSubmit(){
    this.complain.complainStatus= "pending";
    this.complain.user = {
      userId : this.userObj.userId
    };
    this.saveFlight();
    
    Swal.fire({
      text: 'Complain Added, Please check status after some your complain will be resolved!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    
    this.router.navigate(['user/complainListUser']);
  }

  saveFlight(){
    this.complainService.addComplain(this.complain).subscribe((data : any ) =>{
    },
    error => console.log(error));
  }

}
