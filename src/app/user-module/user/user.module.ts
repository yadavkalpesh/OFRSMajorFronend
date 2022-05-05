import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserSearchFlightsComponent } from 'src/app/components3/user-search-flights/user-search-flights.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/components1/material/material.module';
import { NgxPrintModule } from 'ngx-print';
import { NavbarUserComponent } from 'src/app/components3/navbar-user/navbar-user.component';
import { CreateBookingComponent } from 'src/app/components3/create-booking/create-booking.component';
import { TicketComponent } from 'src/app/components3/ticket/ticket.component';
import { ComplainComponent } from 'src/app/components3/complain/complain.component';
import { BookingDetailsComponent } from 'src/app/components3/booking-details/booking-details.component';
import { ComplainListUserComponent } from 'src/app/components3/complain-list-user/complain-list-user.component';
import { FeedbackComponent } from 'src/app/components/feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyprofileComponent } from 'src/app/components3/myprofile/myprofile.component';
import { UpdateProfileComponent } from 'src/app/components3/update-profile/update-profile.component';




@NgModule({
  declarations: [
    UserComponent,
    CreateBookingComponent,
    // PaymentComponent,
    TicketComponent,
    BookingDetailsComponent,
    UserSearchFlightsComponent,
    NavbarUserComponent,
    ComplainComponent,
    ComplainListUserComponent,
    FeedbackComponent,
    MyprofileComponent,
    UpdateProfileComponent
   

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
    // BrowserAnimationsModule, 
    MaterialModule,
    NgxPrintModule,
    NgbModule
  ]
})
export class UserModule { }
