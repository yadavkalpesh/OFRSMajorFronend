import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Flights } from 'src/app/class/flights';
import Swal from 'sweetalert2';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.scss']
})
export class UpdateFlightComponent implements OnInit {

   flight:Flights = new Flights();

  id!:number;

  constructor(private flightService:FlightService,private router:Router,private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params[`id`];
    this.flightService.getFlightById(this.id).subscribe(data =>{
      this.flight = data;
    }, error => console.log(error));
  }

  updateFlight(){
    this.flightService.updateFlightById(this.id,this.flight)
    .subscribe(data => {

    }, error => console.log(error));
  }

  onSubmit(){
    this.updateFlight();
    // alert("Flight Upadted!!")
    Swal.fire({
      text: 'Flight Updated!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['admin/flights']);
  }

  // goToFlightList(){
    
  // }

}
