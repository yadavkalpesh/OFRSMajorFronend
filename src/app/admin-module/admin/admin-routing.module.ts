import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LockedUsersListComponent } from 'src/app/components/locked-users-list/locked-users-list.component';
import { AddFlightComponent } from 'src/app/components1/add-flight/add-flight.component';
import { AddOfferComponent } from 'src/app/components1/add-offer/add-offer.component';
import { BookTicketListComponent } from 'src/app/components1/book-ticket-list/book-ticket-list.component';
import { ComplainListComponent } from 'src/app/components1/complain-list/complain-list.component';
import { FeedbackListComponent } from 'src/app/components1/feedback-list/feedback-list.component';
import { FlightListComponent } from 'src/app/components1/flight-list/flight-list.component';
import { OfferComponent } from 'src/app/components1/offer/offer.component';
import { RegisterUserListComponent } from 'src/app/components1/register-user-list/register-user-list.component';
import { UpdateFlightComponent } from 'src/app/components1/update-flight/update-flight.component';
import { UpdateOfferComponent } from 'src/app/components1/update-offer/update-offer.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent 
,children:[

{path: 'flights', component:FlightListComponent},
   {path: 'addflight', component:AddFlightComponent},
   {path: 'updateflight/:id', component:UpdateFlightComponent},
   {path: 'offer', component: OfferComponent},
    {path: 'addoffer', component:AddOfferComponent},
    {path: 'updateoffer/:id', component:UpdateOfferComponent},
    {path: 'registerUser', component:RegisterUserListComponent},
    {path: 'feedbackList', component:FeedbackListComponent},
    {path: 'complainList', component:ComplainListComponent},
    {path: 'bookedTicketList', component:BookTicketListComponent},
    {path: 'lockeduser', component:LockedUsersListComponent}
   ]},
  ];

   

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
