import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarAdminComponent } from 'src/app/components1/navbar-admin/navbar-admin.component';
import { FlightListComponent } from 'src/app/components1/flight-list/flight-list.component';
import { SearchFlightByNamePipe } from 'src/app/components1/pipes/search-flight-by-name.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/components1/material/material.module';
import { NgxPrintModule } from 'ngx-print';
import { UpdateFlightComponent } from 'src/app/components1/update-flight/update-flight.component';
import { AddFlightComponent } from 'src/app/components1/add-flight/add-flight.component';
import { OfferComponent } from 'src/app/components1/offer/offer.component';
import { AddOfferComponent } from 'src/app/components1/add-offer/add-offer.component';
import { UpdateOfferComponent } from 'src/app/components1/update-offer/update-offer.component';
import { SearchByOfferCodePipe } from 'src/app/components1/pipes/search-by-offer-code.pipe';
import { RegisterUserListComponent } from 'src/app/components1/register-user-list/register-user-list.component';
import { SearchUserPipe } from 'src/app/components1/pipes/search-user.pipe';
import { FeedbackListComponent } from 'src/app/components1/feedback-list/feedback-list.component';
import { SearchUserEmailPipe } from 'src/app/components1/pipes/search-user-email.pipe';
import { ComplainListComponent } from 'src/app/components1/complain-list/complain-list.component';
import { BookTicketListComponent } from 'src/app/components1/book-ticket-list/book-ticket-list.component';
import { LockedUsersListComponent } from 'src/app/components/locked-users-list/locked-users-list.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarAdminComponent,
    FlightListComponent,
    SearchFlightByNamePipe,
    UpdateFlightComponent,
    AddFlightComponent,
    OfferComponent,
    AddOfferComponent,
    UpdateOfferComponent,
    SearchByOfferCodePipe,
    RegisterUserListComponent,
    SearchUserPipe,
    FeedbackListComponent,
    SearchUserEmailPipe,
    ComplainListComponent,
    BookTicketListComponent,
    LockedUsersListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
    // BrowserAnimationsModule, 
    MaterialModule,
    NgxPrintModule
  ]
})
export class AdminModule { }
