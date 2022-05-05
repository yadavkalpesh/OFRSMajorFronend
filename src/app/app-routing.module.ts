import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AddFlightComponent } from './components1/add-flight/add-flight.component';
import { AddOfferComponent } from './components1/add-offer/add-offer.component';
import { FlightListComponent } from './components1/flight-list/flight-list.component';
import { HomeComponent } from './components1/home/home.component';
import { NavbarCommonComponent } from './components1/navbar-common/navbar-common.component';
import { OfferComponent } from './components1/offer/offer.component';
import { UpdateFlightComponent } from './components1/update-flight/update-flight.component';
import { UpdateOfferComponent } from './components1/update-offer/update-offer.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [{path:'',component:HomeComponent},
  
   {path: 'home', component: HomeComponent},
   {path: 'login', component:UserLoginComponent},
  {path: 'register',component:RegisterUserComponent},
  
  {path: 'forgotpassword',component:ForgotPasswordComponent},
  {path: 'logout',component:UserLoginComponent},
  
   { path: 'admin', loadChildren: () => import('./admin-module/admin/admin.module').then(m => m.AdminModule) },
  
   { path: 'user', loadChildren: () => import('./user-module/user/user.module').then(m => m.UserModule) },

  //  {path: 'admin/flights/updateflight/:id', component:UpdateFlightComponent}
  //  {path: 'offer', component: OfferComponent},
  //  {path: 'addoffer', component:AddOfferComponent},
  //  {path: 'updateoffer/:id', component:UpdateOfferComponent},
 
  // {path: 'flights', component:FlightListComponent},
  //  {path: 'addflight', component:AddFlightComponent},
  //  {path: 'updateflight/:id', component:UpdateFlightComponent},
  
  //  {path:'',redirectTo: 'home',pathMatch:'full'},
  // // {path:'**',component:PathnotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
