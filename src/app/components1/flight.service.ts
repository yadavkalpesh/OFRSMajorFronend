import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Flights } from '../class/flights';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  //base url for
  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  getAllFlightList() : Observable<Flights[]>{
    return this._http.get<Flights[]>(this.baseUrl+'/getAllFlight');
  }

  addFlight(flight:Flights): Observable<Object>{
    return this._http.post(`${this.baseUrl}`+"/addFlight",flight);
  }

  getFlightById(id:number):Observable<Flights>{
    return this._http.get<Flights>(`${this.baseUrl}`+'/getFlightById/'+`${id}`);
      }

  updateFlightById(id:number,flight:Flights): Observable<any>{
     return this._http.put(`${this.baseUrl}`+'/updateFlight/'+`${id}`,flight);
  }

  deleteFlight(id:number):Observable<any>{
    return this._http.delete(`${this.baseUrl}`+'/deleteFlight/'+`${id}`);
  }

  searchFlightBy_Source_Destination_Date(source:string,destination:string,departureDate:string):Observable<Flights[]>{
    // return this._http.get<Flights[]>(`${this.baseUrl}`+'/searchFlight?'+'source='+source+'&destination='+destination+'&departureDate='+departureDate);
    return this._http.get<Flights[]>('http://localhost:8080/searchFlight?source='
    +source+'&destination='+destination+'&depatureDate='+departureDate);
  }

}
