import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Feedback } from '../class/feedback';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private httpClient:HttpClient) {}

  baseUrl = "http://localhost:8080/authenticate/addFeedback";
  addFeedback(feedback:any):Observable<Object>{
    console.log(feedback);
    return this.httpClient.post(`${this.baseUrl}`,feedback);
  }
}
