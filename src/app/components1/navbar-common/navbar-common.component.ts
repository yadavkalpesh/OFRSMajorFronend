import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-common',
  templateUrl: './navbar-common.component.html',
  styleUrls: ['./navbar-common.component.scss']
})
export class NavbarCommonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  adminHomeRedirect(){
    this.router.navigate(["admin/flights"])
  }

  userHomeRedirect(){
    this.router.navigate(["user/userSearchFlight"])
  }

}
