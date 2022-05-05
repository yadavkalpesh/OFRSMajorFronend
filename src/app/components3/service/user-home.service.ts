import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTicket } from 'src/app/class/bookTicket';
import { Flights } from 'src/app/class/flights';
import { Offer } from 'src/app/class/offer';
import { RegisterUser } from 'src/app/class/registerUser';

@Injectable({
  providedIn: 'root'
})
export class UserHomeService {

  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  getAllFlightList(): Observable<Flights[]> {
    return this._http.get<Flights[]>(this.baseUrl + '/getAllFlight');
  }

  getFlightById(id: number): Observable<Flights> {
    return this._http.get<Flights>(`${this.baseUrl}` + '/getFlightById/' + `${id}`);
  }

  updateFlightById(id: number, flight: Flights): Observable<any> {
    return this._http.put(`${this.baseUrl}` + '/updateFlight/' + `${id}`, flight);
  }

  searchFlightBy_Source_Destination_Date(source: string, destination: string, departureDate: string): Observable<Flights[]> {
    // return this._http.get<Flights[]>(`${this.baseUrl}`+'/searchFlight?'+'source='+source+'&destination='+destination+'&departureDate='+departureDate);
    return this._http.get<Flights[]>(`${this.baseUrl}` + '/searchFlight?source='
      + source + '&destination=' + destination + '&depatureDate=' + departureDate);
  }

  addBookedFlight(bookTicket: any): Observable<any> {
    return this._http.post(`${this.baseUrl}` + "/newBooking", bookTicket);
  }

  addPassenger(passenger: any): Observable<any> {
    return this._http.post(this.baseUrl + '/addPassenger', passenger);
  }

  getAllOffer(): Observable<Offer[]> {
    return this._http.get<Offer[]>(this.baseUrl + '/getAllOffer');
  }

  getOfferById(id: number): Observable<Offer> {
    console.log("in getofferby id");
    return this._http.get<Offer>(`${this.baseUrl}` + '/getOfferById/' + `${id}`);
  }

  getUserById(id:number):Observable<RegisterUser>{
    return this._http.get<RegisterUser>(`${this.baseUrl}`+'/getUser/'+`${id}`);
      }

}
