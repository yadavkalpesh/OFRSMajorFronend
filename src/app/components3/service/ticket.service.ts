import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTicket } from 'src/app/class/bookTicket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  

  getBooking(id: number): Observable<BookTicket[]> {
    console.log("get booking by id");
    return this._http.get<BookTicket[]>(`${this.baseUrl}` + '/getBooking/' + `${id}`);
  }

  getAllTicketByUserId(id:number): Observable<BookTicket[]> {
    return this._http.get<BookTicket[]>('http://localhost:8080/getAllTicketsByUserId?userId=' + id);
  }

  deleteBooking(id:number):Observable<any>{
    return this._http.delete(`${this.baseUrl}`+'/deleteBooking/'+`${id}`);
  }

}
