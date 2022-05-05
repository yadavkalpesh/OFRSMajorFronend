import { Component, OnInit } from '@angular/core';
import { Feedback } from 'src/app/class/feedback';
import { FeedbackService } from 'src/app/shared/feedback.service';
import { User } from 'src/app/class/user';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  constructor(private feedbackService:FeedbackService, private router:Router, private fb:FormBuilder) { }

  // feedback:any;
  response:any;
  // userid = localStorage.getItem('USERID');
  userObj:any = JSON.parse(JSON.parse(localStorage.getItem('USER') || ''));
  
  feed:Feedback = new Feedback();

  

  ngOnInit(): void {
    console.log(this.userObj.userId);
    this.addFeedback();
  
  }

  
  addFeedback(){
    //console.log(this.feedback.value);
    console.log("feedback on submit", this.feed);
    this.feed.user = {
      userId : this.userObj.userId
    };
    this.feedbackService.addFeedback(this.feed).subscribe(data=>{
      //alert("Feedback added successfully...")
      //this.feedback.reset()
      Swal.fire({
        text: 'Feedback submitted!',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      this.router.navigate(['user/userSearchFlight'])
    }
    );
  }
}