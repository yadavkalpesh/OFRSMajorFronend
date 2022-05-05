import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/class/user';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-locked-users-list',
  templateUrl: './locked-users-list.component.html',
  styleUrls: ['./locked-users-list.component.scss']
})
export class LockedUsersListComponent implements OnInit {
  users:any=[];
  errorMsg:any;
  constructor(private loginService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.getAllLockedUsers();
  }
  private getAllLockedUsers()  {
    this.loginService.getAllLockedUser().subscribe((response: User[])=>{
      this.users=response;
       });
  }

  unlock(id:number){
    this.loginService.unlockUserById(id).subscribe(data=>{
    },error=>{
   console.log(this.errorMsg=error.error);
    })
  }
   unlockUser(id:number){
    this.unlock(id);
      window.location.reload();
      // this.router.navigate(['admin/lockUsers']);
       };
}
