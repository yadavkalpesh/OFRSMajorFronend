import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complain } from 'src/app/class/complain';
import { ComplainService } from '../service/complain.service';

@Component({
  selector: 'app-complain-list-user',
  templateUrl: './complain-list-user.component.html',
  styleUrls: ['./complain-list-user.component.scss']
})
export class ComplainListUserComponent implements OnInit {

  complainList: Complain[] = [];

  localuser:any=JSON.parse(localStorage.getItem('USER') || '{}');
  userObj:any = JSON.parse(JSON.parse(localStorage.getItem('USER') || ''));
  //userId:any = localStorage.getItem('UserId'); 


  constructor(private complainService: ComplainService, private router: Router) { }

  ngOnInit(): void {
    this.complainService.getAllComplainByUserId(this.userObj.userId).subscribe((data: any) => {
      console.table(data);
      this.complainList = data;
      console.log("all list on complain user ts: ",this.complainList);
    })
  }

  addComplain(){
    this.router.navigate(['user/addComplain']);
  }

   //calling deleteFlight method on click event
   deletecur(id:number){
    this.deleteFlight(id);
    window.location.reload();
  }

  //delete flight from db calling service method
  deleteFlight(id:number){
    this.complainService.deleteComplain(id).subscribe(data =>{
      
      // this.getAllFlight();
    })
  }
}
