import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpClient:HttpClient) {}
  baseUrl = "http://localhost:8080";
  
  getAllUser() : Observable<User[]>{
    return this.httpClient.get<User[]>(this.baseUrl+'/getAllUser');
  }

  addUser(user:User): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`+"/authenticate/addUser",user);
  }

  getUser(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.baseUrl}`+'/getUser/'+`${id}`);
  }

  updateUser(id:number,user:User): Observable<any>{
     return this.httpClient.put(`${this.baseUrl}`+'/updateUser/'+`${id}`,user);
  }

  deleteUser(id:number):Observable<any>{
    return this.httpClient.delete(`${this.baseUrl}`+'/deleteUser/'+`${id}`);
  }

  findByuserEmail(userEmail:string):Observable<any>{
    return this.httpClient.get<User>(`${this.baseUrl}`+'/findByuserEmail/'+`${userEmail}`);
  }

  findByUserName(userName:string):Observable<any>{
    return this.httpClient.get<User>(`${this.baseUrl}`+'/findByUserName/'+`${userName}`);
  }
}
