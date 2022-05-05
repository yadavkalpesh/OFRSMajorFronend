import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offer } from '../class/offer';


@Injectable({
  providedIn: 'root'
})
export class OfferService {



  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  getAllOffer() : Observable<Offer[]>{
    return this._http.get<Offer[]>(this.baseUrl+'/getAllOffer');
  }

  addOffer(offer:Offer): Observable<Object>{
    return this._http.post(`${this.baseUrl}`+"/addOffer",offer);
  }

  getOfferById(id:number):Observable<Offer>{
    console.log("in getofferby id");
    return this._http.get<Offer>(`${this.baseUrl}`+'/getOfferById/'+`${id}`);
      }

  updateOfferById(id:number,offer:Offer): Observable<any>{
     return this._http.put(`${this.baseUrl}`+'/updateOffer/'+`${id}`,offer);
  }

  deleteOffer(id:number):Observable<any>{
    return this._http.delete(`${this.baseUrl}`+'/deleteOffer/'+`${id}`);
  }

}
