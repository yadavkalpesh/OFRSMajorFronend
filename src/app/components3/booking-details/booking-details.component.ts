import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookTicket } from 'src/app/class/bookTicket';
import { Flights } from 'src/app/class/flights';
import Swal from 'sweetalert2';
import { TicketService } from '../service/ticket.service';
import { UserHomeService } from '../service/user-home.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  bookTicket: BookTicket[] = [];

  localuser:any=JSON.parse(localStorage.getItem('USER') || '{}');
  userObj:any = JSON.parse(JSON.parse(localStorage.getItem('UserId') || ''))
  flightId!:number;

  flight:Flights = new Flights();

  constructor(private TicketService: TicketService, private router: Router, private fb: FormBuilder, private activeroute: ActivatedRoute,private userHomeService:UserHomeService) { }

  ngOnInit(): void {
    // this.flightId = this.activeroute.snapshot.params[`id`];
    // this.getBooking();
    this.TicketService.getAllTicketByUserId(this.userObj).subscribe((data: any) => {
     
      this.bookTicket = data;
      
    })
    
    // this.userHomeService.getFlightById(this.flightId).subscribe(data =>{
    //   this.flight = data;
    // }, error => console.log(error));
  }

   //calling deleteFlight method on click event
   deletecur(id:number){
    this.deleteBooking(id);
    Swal.fire({
      text: 'Booking Deleted!!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    
    window.location.reload();
  }

  //delete flight from db calling service method
  deleteBooking(id:number){
    this.TicketService.deleteBooking(id).subscribe(data =>{
     
      
    })
  }

  

}
