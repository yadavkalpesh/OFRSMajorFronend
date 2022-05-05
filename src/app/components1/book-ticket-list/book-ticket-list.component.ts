import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookTicket } from 'src/app/class/bookTicket';
import { AdminListService } from '../admin-list.service';
import * as XLSX from 'xlsx';
import {NgxPrintModule} from 'ngx-print';
import { ElementRef} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-book-ticket-list',
  templateUrl: './book-ticket-list.component.html',
  styleUrls: ['./book-ticket-list.component.scss']
})
export class BookTicketListComponent implements OnInit {


  fileName = 'BookedTicketList.xlsx'; //excel and pdf file will have this name

  searchUser!:string;  //search filter by user email

  bookTicketList:BookTicket[]=[]; //storing all list of complain 

  constructor(private adminList:AdminListService,private router:Router) { }

  ngOnInit(): void {
    this.getAllComplainList();
  }



  // get all complain list calling service method
  private getAllComplainList(){
    this.adminList.getAllBookedTicketList().subscribe((data : BookTicket[]) => {
      
      this.bookTicketList = data;
      
    });
  }


   //exporting to excel code on click event
   exportToExcel():void{
    let element = document.getElementById('flightListTable');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    //generate workbook and add the worksheet
    const wb:XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    //save to file
    XLSX.writeFile(wb, this.fileName);
  }

   //exporting html to pdf on click event 
   public convetToPDF()
   { 
     let data = document.getElementById('flightListTable')!;
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
     pdf.save('BookedTicketList.pdf'); // Generated PDF
     });
   }

}
