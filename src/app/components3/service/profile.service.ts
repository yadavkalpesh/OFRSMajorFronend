import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterUser } from 'src/app/class/registerUser';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseUrl = "http://localhost:8080";

  constructor(private _http: HttpClient) { }

  getUser(id:number):Observable<RegisterUser>{
    console.log("In getuser by Id");
    return this._http.get<RegisterUser>(`${this.baseUrl}`+'/getUser/'+`${id}`);
      }

  updateUser(id:number,registerUser:RegisterUser): Observable<any>{
      return this._http.put(`${this.baseUrl}`+'/updateOffer/'+`${id}`,registerUser);
     }




}
