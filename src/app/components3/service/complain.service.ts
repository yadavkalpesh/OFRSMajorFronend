import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complain } from 'src/app/class/complain';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  addComplain(complain: any): Observable<any> {
    return this._http.post(this.baseUrl + '/addComplain', complain);
  }

  getAllComplainByUserId(id:number): Observable<Complain[]> {
    return this._http.get<Complain[]>('http://localhost:8080/getAllComplainByUserId?userId=' + id);
  }

  deleteComplain(id:number):Observable<any>{
    return this._http.delete(`${this.baseUrl}`+'/deleteComplain/'+`${id}`);
  }

}
