import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searched-flight-list',
  templateUrl: './searched-flight-list.component.html',
  styleUrls: ['./searched-flight-list.component.scss']
})
export class SearchedFlightListComponent implements OnInit {

  flights:any;
  constructor() { }

  ngOnInit(): void {
  }

}
