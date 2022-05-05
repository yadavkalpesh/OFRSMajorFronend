import { OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Flights } from 'src/app/class/flights';
import { FlightService } from '../flight.service';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import * as XLSX from 'xlsx';
import {NgxPrintModule} from 'ngx-print';
import { ElementRef} from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';





@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit {

  flights:Flights[]=[];

  //property for excel file name
  filenName = 'FlightList.xlsx';

  flagfilter:boolean = true;  //Hide/show table on basis of this boolean value

  filterTime:any;  //storing flight array on basis of filter
  
  path:string = "/assets/logo/trujet.png";

  searchFlight!:string;  //getting input for search filter from user and used this for searchPipe

  constructor(private flightService:FlightService, private router:Router) { }

  ngOnInit(): void {
    // console.log(this.myusername);
    this.getAllFlight();  
  }

  // get all filght list calling service method
  private getAllFlight(){
    this.flightService.getAllFlightList().subscribe((data : Flights[]) => {
      console.log(data);
      this.flights = data;

      // console.log(this.time);
      this.morning();
      // this.nnn = this.flights.filter(ele=>ele.flightName.length==6);
      // console.log(this.nnn);
    });
  }

//filtering data on basis of departure Time Start***************************************************
  morning(){
    this.flagfilter =! this.flagfilter;
    this.filterTime = this.flights.filter(ele=>(ele.departureTime>'04:00' && ele.departureTime<'11:00'));
  }

  afternoon(){
    this.flagfilter =! this.flagfilter;
    this.filterTime = this.flights.filter(ele=>(ele.departureTime>'11:00' && ele.departureTime<'17:00'));
  }

  evening(){
    this.flagfilter =! this.flagfilter;
    this.filterTime = this.flights.filter(ele=>(ele.departureTime>'17:00' && ele.departureTime<'24:00'));
  }

  night(){
    this.flagfilter =! this.flagfilter;
    this.filterTime = this.flights.filter(ele=>(ele.departureTime>'00:00' && ele.departureTime<'04:00'));
  }

  //filtering data on basis of departure Time End*********************************************************************

  //navigating to add Flight component using click event
  addFlight(){
    this.router.navigate(['admin/addflight']);
  }

  //navigating to update Flight component using click event with passing id of flight
  updateFlight(id:number){
    this.router.navigate(['admin/updateflight',id]);
  }

  //calling deleteFlight method on click event
  deletecur(id:number){
    this.deleteFlight(id);
    window.location.reload();
  }

  //delete flight from db calling service method
  deleteFlight(id:number){
    this.flightService.deleteFlight(id).subscribe(data =>{
      
      // this.getAllFlight();
    })
  }

  //exporting to excel code on click event
  exportToExcel():void{
    let element = document.getElementById('flightListTable');
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
    pdf.save('Filght_List.pdf'); // Generated PDF
    });
  }
  

}
