import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flights } from 'src/app/class/flights';
import { Offer } from 'src/app/class/offer';
import { FlightService } from '../flight.service';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flag:boolean=false;

  flights!:any;

  valid!:string;
  flagValid:boolean=false;

  currentDate:any = new Date();
  // flights:Flights[]=[];

  // source:string='';
  // destination:string='';
  // departureDate:string='';
  
  offer:Offer[]=[];
  

  constructor(private flightService:FlightService,private router:Router,private fb:FormBuilder,private offerService:OfferService) { }

  ngOnInit(): void {
    this.flights = this.fb.group({
      source:['',[Validators.required]],
      destination:['',[Validators.required]],
      departureDate:['',[Validators.required]]
    });

    this.getAllOffer();
  }

  get source(){
    return this.flights.get('source');
  }

  get destination(){
    return this.flights.get('destination');
  }

  get departureDate(){
    return this.flights.get('departureDate');
  }

  check(){
    if(this.flights.controls['source'].value === this.flights.controls['destination'].value){
      this.flagValid =! this.flagValid;
      this.valid ="Source and Destination Should Not be Same!!";
    }else{
      this.valid="";
    }
  }

  // searchFlightFilter(){
   
  // }

  onSubmit(){
    this.flag =! this.flag;
    
    console.log(this.flights.controls['source'].value,this.flights.controls['destination'].value,this.flights.controls['departureDate'].value);
    this.flightService.searchFlightBy_Source_Destination_Date(this.flights.controls['source'].value,this.flights.controls['destination'].value,this.flights.controls['departureDate'].value)
    .subscribe((data:any)=>{
      
      this.flights = data;
    })
  }


  private getAllOffer(){
    this.offerService.getAllOffer().subscribe((data : Offer[]) => {
      
      this.offer = data;
      
    });
  }
}
