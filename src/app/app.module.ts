import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{   HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './components1/material/material.module';
import { HomeComponent } from './components1/home/home.component';
import { NavbarCommonComponent } from './components1/navbar-common/navbar-common.component';
import { NavbarAdminComponent } from './components1/navbar-admin/navbar-admin.component';
import { FlightListComponent } from './components1/flight-list/flight-list.component';
import { AddFlightComponent } from './components1/add-flight/add-flight.component';
import { UpdateFlightComponent } from './components1/update-flight/update-flight.component';
import { SearchFlightByNamePipe } from './components1/pipes/search-flight-by-name.pipe';
import { OfferComponent } from './components1/offer/offer.component';
import { AddOfferComponent } from './components1/add-offer/add-offer.component';
import { UpdateOfferComponent } from './components1/update-offer/update-offer.component';
import { SearchByOfferCodePipe } from './components1/pipes/search-by-offer-code.pipe';
import { NgxPrintModule } from 'ngx-print';
import { RegisterUserListComponent } from './components1/register-user-list/register-user-list.component';
import { SearchUserPipe } from './components1/pipes/search-user.pipe';
import { FeedbackListComponent } from './components1/feedback-list/feedback-list.component';
import { SearchUserEmailPipe } from './components1/pipes/search-user-email.pipe';
import { ComplainListComponent } from './components1/complain-list/complain-list.component';
import { BookTicketListComponent } from './components1/book-ticket-list/book-ticket-list.component';
import { ComplainListUserComponent } from './components3/complain-list-user/complain-list-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarCommonComponent,
    RegisterUserComponent,
    UserLoginComponent,
    
    ForgotPasswordComponent,
        //  MyprofileComponent,
        //  UpdateProfileComponent,
    
    
    // NavbarAdminComponent,
    // FlightListComponent,
    // AddFlightComponent,
    // UpdateFlightComponent,
    // SearchFlightByNamePipe,
    // OfferComponent,
    // AddOfferComponent,
    // UpdateOfferComponent,
    // SearchByOfferCodePipe
   
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MaterialModule,
    NgxPrintModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
