import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Flights } from 'src/app/class/flights';
import { sourceNotEqualToDestinationValidator } from 'src/app/validation/sourceDestination.validation';
import Swal from 'sweetalert2';
import { FlightService } from '../flight.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.scss']
})
export class AddFlightComponent implements OnInit {

  // flight:Flights = new Flights();

  flight!:any;

  valid!:string;
  flagValid:boolean=false;

  currentDate:any = new Date();

  constructor(private flightService:FlightService,private router:Router,private fb:FormBuilder) { }

  check(){
    if(this.flight.controls['source'].value === this.flight.controls['destination'].value){
      this.flagValid =! this.flagValid;
      this.valid ="Source and Destination Should Not be Same!!";
    }else{
      this.valid="";
    }
  }

  ngOnInit(): void {
    this.flight = this.fb.group({
      flightName:['',[Validators.required]],
      source:['',[Validators.required]],
      destination:['',Validators.required],
      departureDate:['',[Validators.required]],
      departureTime:['',[Validators.required]],
      stops:['',Validators.required],
      totalSeats:[,[Validators.required,Validators.min(1),Validators.max(850)]],
      basePrice:[,[Validators.required,Validators.min(500)]]
    },{Validators: sourceNotEqualToDestinationValidator});

   
  }

  get flightName(){
    return this.flight.get('flightName');
  }

  get source(){
    return this.flight.get('source');
  }

  get destination(){
    return this.flight.get('destination');
  }

  get departureDate(){
    return this.flight.get('departureDate');
  }

  get departureTime(){
    return this.flight.get('departureTime');
  }

  get stops(){
    return this.flight.get('stops');
  }

  get totalSeats(){
    return this.flight.get('totalSeats');
  }

  get basePrice(){
    return this.flight.get('basePrice');
  }

  saveFlight(){
    this.flightService.addFlight(this.flight.value).subscribe((data : any ) =>{
      console.log(data);
      console.log("flight added");
      // this.goToFlightList();
    },
    error => console.log(error));
  }



  onSubmit(){
    
    // console.log(this.flight.controls['flightName'].value);
    this.saveFlight();
    // alert("Flight added!!")
    Swal.fire({
      text: 'Flight Added!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['admin/flights']);
  }

}
