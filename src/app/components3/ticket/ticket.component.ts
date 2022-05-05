import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookTicket } from 'src/app/class/bookTicket';
import { Flights } from 'src/app/class/flights';
import { RegisterUser } from 'src/app/class/registerUser';
import { TicketService } from '../service/ticket.service';
import { UserHomeService } from '../service/user-home.service';



@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  bookTicket: BookTicket[] = [];

  localuser:any=JSON.parse(JSON.parse(localStorage.getItem('USER') || '{}'));
  userId:any = this.localuser.userId;

  user:RegisterUser = new RegisterUser();

  flightId!:number;

  flight:Flights = new Flights();

  constructor(private TicketService: TicketService, private router: Router, private fb: FormBuilder, private activeroute: ActivatedRoute,private UserHomeService:UserHomeService) { }

  ngOnInit(): void {
    this.flightId = this.activeroute.snapshot.params[`id`];
    this.getBooking();

    this.UserHomeService.getUserById(this.userId).subscribe(data =>{
      this.user = data;
      console.log("user By id",this.user);
    }, error => console.log(error));
    
    this.UserHomeService.getFlightById(this.flightId).subscribe(data =>{
      this.flight = data;
      console.log("flight",data);
    }, error => console.log(error));
  }

  getBooking() {
    this.TicketService.getAllTicketByUserId(this.userId).subscribe((data: any) => {
        // console.table(data);
        this.bookTicket = data;
        console.log("all list: ",this.bookTicket);
      })
  }

}
