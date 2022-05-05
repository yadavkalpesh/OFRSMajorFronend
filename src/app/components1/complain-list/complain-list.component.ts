import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';
import {NgxPrintModule} from 'ngx-print';
import { ElementRef} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Complain } from 'src/app/class/complain';
import { AdminListService } from '../admin-list.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.scss']
})
export class ComplainListComponent implements OnInit {

  fileName = 'ComplainList.xlsx'; //excel and pdf file will have this name

  searchUser!:string;  //search filter by user email

  complainList:Complain[]=[]; //storing all list of complain 

  status!:string;  //taking status value by admin

  updateComplainStatus!:Complain;  //storing single complain for getComplainById Method

  complainId!:number;  //store complain id for particular complain on click event

  constructor(private adminList:AdminListService,private router:Router) { }

  ngOnInit(): void {
    this.getAllComplainList();  //calling method for getting all complaints
  }

  onSubmit(id:number){
    this.complainId =id;

    //storing single complain is updateComplainStatus object by calling service method 
    this.adminList.getComplainById(this.complainId).subscribe(data =>{
      this.updateComplainStatus = data;
      
    }, error => console.log(error));

    //updating complain status by calling service method
    this.updateComplainStatus.complainStatus = this.status;
    
    this.adminList.updateComplainById(this.complainId,this.updateComplainStatus)
    .subscribe(data => {
     
    }, error => console.log(error));

    window.location.reload();
    // this.router.navigate(['complainList']);
  }



  // get all complain list calling service method
  private getAllComplainList(){
    this.adminList.getAllComplainList().subscribe((data : Complain[]) => {
      
      this.complainList = data;
      console.table(this.complainList);
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
    pdf.save('FeedBackList.pdf'); // Generated PDF
    });
  }

}
