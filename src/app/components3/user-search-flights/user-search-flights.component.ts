import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Flights } from 'src/app/class/flights';
import { UserHomeService } from '../service/user-home.service';

@Component({
  selector: 'app-user-search-flights',
  templateUrl: './user-search-flights.component.html',
  styleUrls: ['./user-search-flights.component.scss']
})
export class UserSearchFlightsComponent implements OnInit {

  
  flag:boolean=false;

  id!:number;

  flights!:any;

  valid!:string;
  flagValid:boolean=false;

  currentDate:any = new Date();
  constructor(private UserHomeService:UserHomeService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.flights = this.fb.group({
      source:['',[Validators.required]],
      destination:['',Validators.required],
      departureDate:['',[Validators.required]],
      travellers:['',[Validators.required,Validators.min(1),Validators.max(3)]],
      travelClass:['',[Validators.required]],
    })
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

  get travellers(){
    return this.flights.get('travellers');
  }

  get travelClass(){
    return this.flights.get('travelClass');
  }


  check(){
    if(this.flights.controls['source'].value === this.flights.controls['destination'].value){
      this.flagValid =! this.flagValid;
      this.valid ="Source and Destination Should Not be Same!!";
    }else{
      this.valid="";
    }
  }

   onSubmit(){

    // console.log(this.source);
    // console.log(this.destination);
    // console.log(this.departureDate);
    this.flag =! this.flag;
    
    
    this.UserHomeService.searchFlightBy_Source_Destination_Date(this.flights.controls['source'].value,this.flights.controls['destination'].value,this.flights.controls['departureDate'].value)
    .subscribe((data:any)=>{
      console.table(data);
      this.flights = data;
    })
  }


  onBookClick(id:number){
    
    this.router.navigate(['user/createBooking',id]);
  }
}
