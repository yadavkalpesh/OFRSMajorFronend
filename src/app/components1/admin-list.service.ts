import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTicket } from '../class/bookTicket';
import { Complain } from '../class/complain';
import { Feedback } from '../class/feedback';
import { RegisterUser } from '../class/registerUser';

@Injectable({
  providedIn: 'root'
})
export class AdminListService {

  //base url for
  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  getAllRegisterUserList() : Observable<RegisterUser[]>{
    return this._http.get<RegisterUser[]>(this.baseUrl+'/getAllUser');
  }

  getAllFeedbackList() : Observable<Feedback[]>{
    return this._http.get<Feedback[]>(this.baseUrl+'/getAllFeedback');
  }

  getAllComplainList() : Observable<Complain[]>{
    return this._http.get<Complain[]>(this.baseUrl+'/getAllComplain');
  }

  getAllBookedTicketList() : Observable<BookTicket[]>{
    return this._http.get<BookTicket[]>(this.baseUrl+'/getAllBookings');
  }

  getComplainById(id:number):Observable<Complain>{
    return this._http.get<Complain>(`${this.baseUrl}`+'/getComplain/'+`${id}`);
      }

  updateComplainById(id:number,complain:Complain): Observable<any>{
    return this._http.put(`${this.baseUrl}`+'/updateComplain/'+`${id}`,complain);
 }
}
