import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from 'src/app/components/feedback/feedback.component';
import { BookingDetailsComponent } from 'src/app/components3/booking-details/booking-details.component';
import { ComplainListUserComponent } from 'src/app/components3/complain-list-user/complain-list-user.component';
import { ComplainComponent } from 'src/app/components3/complain/complain.component';
import { CreateBookingComponent } from 'src/app/components3/create-booking/create-booking.component';
import { MyprofileComponent } from 'src/app/components3/myprofile/myprofile.component';
import { TicketComponent } from 'src/app/components3/ticket/ticket.component';
import { UpdateProfileComponent } from 'src/app/components3/update-profile/update-profile.component';
import { UserSearchFlightsComponent } from 'src/app/components3/user-search-flights/user-search-flights.component';
import { AuthGuard } from 'src/app/shared/auth.guard';
import { UserComponent } from './user.component';

const routes: Routes = [{ path: '', component: UserComponent,
children:[
  {path: 'userSearchFlight', component: UserSearchFlightsComponent},
  {path: 'createBooking/:id', component: CreateBookingComponent},
  {path: 'manageBookings', component: BookingDetailsComponent},
  {path: 'ticket/:id', component: TicketComponent},
  {path: 'addComplain', component: ComplainComponent},
  {path: 'complainListUser', component: ComplainListUserComponent},

  {path: 'myProfile', component: MyprofileComponent},
  {path: 'updateProfile', component: UpdateProfileComponent},

  {path: 'feedback', component:FeedbackComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
