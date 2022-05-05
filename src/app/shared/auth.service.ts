import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:8080";
  private loginUrl = "http://localhost:8080/authenticate";
  private otpUrl = "http://localhost:8080";
  
  constructor(private httpClient:HttpClient) { }

  loggedIn(){
    return !!localStorage.getItem('TOKEN');
  }

  logout(){
    window.localStorage.removeItem('TOKEN');
    window.localStorage.removeItem('USER');
  }  

  // generateToken(user:User){
  //   return this.httpClient.post<string>("http://localhost:8080/authenticate", user, {  responseType: 'text' as 'json' });
  // }

  getToken(){
    return localStorage.getItem('TOKEN')
  }

  // sendOtp(contact:any):Observable<any>{
  //   return this.httpClient.post(this.otpUrl+'/sendotp', contact);
  // }

  // verifyOtp(otpCredential:any):Observable<any>{
  //   return this.httpClient.post(this.otpUrl+'/verifyotp',otpCredential);
  // }

  getAllUser(token:any) : Observable<User[]>{
    let tokenStr = 'Bearer ' + token;
    const headers = new HttpHeaders().set('Authorization', tokenStr);
    return this.httpClient.get<User[]>(this.registerUrl+'/getAllUser', {headers, responseType: 'text' as 'json' });
  }

  addUser(user:User): Observable<Object>{
    return this.httpClient.post<string>(`${this.registerUrl}`+"/authenticate/registerUser",user, {  responseType: 'text' as 'json' });
  }

  getUser(id:number):Observable<User>{
    return this.httpClient.get<User>(`${this.registerUrl}`+'/getUser/'+`${id}`);
  }

  updateUser(id:number,user:User): Observable<any>{
     return this.httpClient.put(`${this.registerUrl}`+'/updateUser/'+`${id}`,user);
  }

  deleteUser(id:number):Observable<any>{
    return this.httpClient.delete(`${this.registerUrl}`+'/deleteUser/'+`${id}`);
  }

  findByuserEmail(userEmail:string):Observable<User>{
    return this.httpClient.get<User>(`${this.registerUrl}`+'/authenticate/findByuserEmail/'+`${userEmail}`, {responseType: 'text' as 'json' });
  }

  findByUserName(userName:string):Observable<any>{
    return this.httpClient.get<User>(`${this.registerUrl}`+'/findByUserName/'+`${userName}`);
  }



  getOtp(user:User):Observable<any>{
    console.log("Auth Service")
    return this.httpClient.post("http://localhost:8080/authenticate",user);
  }

  getUserById(id:any){
  return this.httpClient.get("http://localhost:8080/getUser/"+id)
}


getAllLockedUser(){
  
  return this.httpClient.get<any>('http://localhost:8080/getAllLockedUsers/')
}

unlockUserById(id:any){
  
  return this.httpClient.get<any>('http://localhost:8080/unlockUser/'+id)
}
}