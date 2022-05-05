import { Component, OnInit } from '@angular/core';

import * as XLSX from 'xlsx';
import {NgxPrintModule} from 'ngx-print';
import { ElementRef} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { RegisterUser } from 'src/app/class/registerUser';
import { AdminListService } from '../admin-list.service';

@Component({
  selector: 'app-register-user-list',
  templateUrl: './register-user-list.component.html',
  styleUrls: ['./register-user-list.component.scss']
})
export class RegisterUserListComponent implements OnInit {

  fileName = 'RegisteredUserList.xlsx';

  searchUser!:string;

  users:RegisterUser[]=[];

  constructor(private adminList:AdminListService) { }

  ngOnInit(): void {
    this.getAllFlight();
  }


  // get all filght list calling service method
  private getAllFlight(){
    this.adminList.getAllRegisterUserList().subscribe((data : RegisterUser[]) => {
      
      this.users = data;
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
    pdf.save('RegisteredUserList.pdf'); // Generated PDF
    });
  }
}
