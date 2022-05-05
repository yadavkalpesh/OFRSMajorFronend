import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/class/offer';
import { OfferService } from '../offer.service';
import * as XLSX from 'xlsx';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  offer:Offer[]=[];

  searchOffer!:string;

  //property for excel file name
  filenName = 'OfferList.xlsx';

  constructor(private offerService:OfferService, private router:Router) { }

 
  ngOnInit(): void {
    this.getAllOffer();
  }

  private getAllOffer(){
    this.offerService.getAllOffer().subscribe((data : Offer[]) => {
      
      this.offer = data;
      
    });
  }

  addOffer(){
    this.router.navigate(['admin/addoffer']);
  }

  updateOffer(id:number){
    this.router.navigate(['admin/updateoffer',id]);
  }

  deletecur(id:number){
    this.deleteOffer(id);
    window.location.reload();
  }


  deleteOffer(id:number){
    this.offerService.deleteOffer(id).subscribe(data =>{
     
      // this.getAllFlight();
    })
  }

   //exporting to excel code on click event
   exportToExcel():void{
    let element = document.getElementById('OfferList');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //generate workbook and add the worksheet
    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    //save to file
    XLSX.writeFile(wb, this.filenName);
  }


  //exporting html to pdf on click event 
  public convetToPDF()
  { 
    let data = document.getElementById('OfferList')!;
    html2canvas(data).then(canvas => {
    // Few necessary setting options
    var imgWidth = 208;
    var pageHeight = 295;
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    
    const contentDataURL = canvas.toDataURL('image/png')
    let pdf = new jspdf.jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
    var position = 0;
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
    pdf.save('Offer_List.pdf'); // Generated PDF
    });
  }

}
