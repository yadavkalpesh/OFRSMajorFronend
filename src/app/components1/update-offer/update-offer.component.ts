import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from 'src/app/class/offer';
import Swal from 'sweetalert2';
import { OfferService } from '../offer.service';

@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.scss']
})
export class UpdateOfferComponent implements OnInit {

  offer:Offer = new Offer();

  id:number=1;

  constructor(private offerService:OfferService,private router:Router,private activeroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params[`id`];
    this.offerService.getOfferById(this.id).subscribe(data =>{
      this.offer = data;
    }, error => console.log(error));
  }

  updateOffer(){
    this.offerService.updateOfferById(this.id,this.offer)
    .subscribe(data => {
    }, error => console.log(error));
  }

  onSubmit(){
    this.updateOffer();
    // alert("Offer Updated!!")
    Swal.fire({
      text: 'Offer Updated!!',
      icon: 'success',
      confirmButtonText: 'OK'
    })
    this.router.navigate(['admin/offer']);
  }

}
