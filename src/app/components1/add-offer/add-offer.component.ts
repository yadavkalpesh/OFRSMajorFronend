import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.scss']
})
export class AddOfferComponent implements OnInit {

  offer!:any;

  constructor(private offerService:OfferService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.offer = this.fb.group({
      offerName:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      offerCode:['',[Validators.required,Validators.minLength(3),Validators.maxLength(15)]],
      offerAmount:[,[Validators.required,Validators.min(5)]]
    })
  
  }

  get offerName(){
    return this.offer.get('offerName');
  }

  get offerCode(){
    return this.offer.get('offerCode');
  }

  get offerAmount(){
    return this.offer.get('offerAmount');
  }
 

  saveFlight(){
    this.offerService.addOffer(this.offer.value).subscribe((data : any ) =>{
      
      // this.goToOfferList();
    },
    error => console.log(error));
  }



  // goToOfferList(){
  //   this.router.navigate(['/offer']);
  // }


  onSubmit(){
    // console.log(this.flight.controls['flightName'].value);
    this.saveFlight();
    // alert("Offer added!!")
    Swal.fire({
      text: 'Offer Added!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['admin/offer']);
  }

}
