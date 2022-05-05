import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  IsLoggedIn(){
    return !!localStorage.getItem('TOKEN');
  }

  generateToken(user:User){
    return this.httpClient.post<string>("http://localhost:8080/authenticate", user, {  responseType: 'text' as 'json' });
  }
  
  public homePage(token:any){
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<string>("http://localhost:8080/", {headers, responseType: 'text' as 'json' });
  }
}