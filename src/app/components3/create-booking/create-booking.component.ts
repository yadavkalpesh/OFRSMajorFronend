import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { BookTicket } from 'src/app/class/bookTicket';
import { Flights } from 'src/app/class/flights';
import { Offer } from 'src/app/class/offer';
import { Passenger } from 'src/app/class/passenger';
import Swal from 'sweetalert2';
import { UserHomeService } from '../service/user-home.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss']
})
export class CreateBookingComponent implements OnInit {

  bookTicket:BookTicket = new BookTicket();
  //  bookTicket:any;
  flight:Flights = new Flights();
  passenger = new Passenger();
  dataarray:any[]=[];

  offerId!:number;



  // temp:object = this.dataarray[0];

  id!:number; //flightId

  index:number=1;

  returnDate:string ="25/4/2022";
  totalAmount:number=11222;
  // offerId:number=2;
  localuser:any=JSON.parse(JSON.parse(localStorage.getItem('USER') || '{}'));
  userId:any = this.localuser.userId;

  offer:Offer[]=[]; //get all offers

  offerNew:Offer=new Offer;  //get offer by id

  offerAmount!:number;

  userEmail:string=''; //storing useremail from local storage

  updatedFlight:Flights = new Flights();

  constructor(private UserHomeService:UserHomeService,private router:Router,private fb:FormBuilder,private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.bookTicket = new BookTicket();
    this.dataarray.push(this.bookTicket);

    this.id = this.activeroute.snapshot.params[`id`];
    this.UserHomeService.getFlightById(this.id).subscribe(data =>{
      this.flight = data;
      this.updatedFlight = data;
      
    }, error => console.log(error));


    this.getAllOffer();
    // this.getOfferById();
    
    // this.onSelectOfffer();
    
  }


  addForm(){
   this.bookTicket = new BookTicket();
    this.dataarray.push(this.bookTicket);
    
    this.dataarray.map(element=>{element.flightId=this.flight.flightId,
            element.returnDate=this.returnDate,
            element.totalAmount=this.totalAmount,
            // element.offerId=this.offerId,
            element.userId=this.userId
            })
    //this.dataarray.push(this.id);
    
  }

  
  //main form submit
  onSubmit(){
  
    // this.bookTicket.returnDate="25/4/2022";
    this.bookTicket.totalAmount=this.flight.basePrice - this.offerNew.offerAmount;
    this.bookTicket.offerId=this.offerId;
    this.bookTicket.userId=this.userId;
    this.bookTicket.flightId=this.id;

    for(let i=0;i<this.dataarray.length;i++ ){
      
      this.UserHomeService.addBookedFlight(this.dataarray[i]).subscribe((data : any ) =>{
  
        // this.goToFlightList();
      },
      error => console.log(error));
    }
    this.updateFlight();
   // alert("Filght Booked!!!")
    Swal.fire({
      text: 'Flight Booked!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['user/ticket',this.id]);
    
  }

  removeForm(index:number){
    this.bookTicket = new BookTicket();
    this.dataarray.splice(index);
  }
  removeForms(){
    this.bookTicket = new BookTicket();
    
  }

  savePassenger(){
    
    this.passenger.userId=this.userId;
    this.UserHomeService.addPassenger(this.passenger).subscribe((data:any)=>{
      
      //alert("passager added!!!")
      Swal.fire({
        text: 'Passenger Added!!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
    });

    this.passenger.passengerName="";
    this.passenger.gender="";
    this.passenger.contactNumber="";

  }


  private getAllOffer(){
    this.UserHomeService.getAllOffer().subscribe((data : Offer[]) => {
      this.offer = data;
      
    });
  }

   getOfferById(id:number){
    this.UserHomeService.getOfferById(id).subscribe(data =>{
      this.offerNew = data;
      this.offerAmount = this.offerNew.offerAmount;
      

    }, error => console.log(error));
  }

  updateFlight(){
    this.updatedFlight.totalSeats=(this.updatedFlight.totalSeats-this.bookTicket.totalPassenger);
    this.UserHomeService.updateFlightById(this.id,this.updatedFlight)
    .subscribe(data => {
      
    }, error => console.log(error));
  }

}
