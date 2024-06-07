import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { GreetingRegComponent } from './pages/greeting-reg/greeting-reg.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { TulipComponent } from './pages/tulip/tulip.component';
import { LunettaComponent } from './pages/lunetta/lunetta.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { ManageRoomsComponent } from './pages/manage-rooms/manage-rooms.component';
import { AddRoomsComponent } from './pages/add-rooms/add-rooms.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "accomodation", component: AccommodationComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "contact", component: ContactComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "thank-you", component: GreetingRegComponent },
  { path: "tulip", component:TulipComponent},
  { path: "lunetta", component:LunettaComponent },
  { path: "reservation", component:ReservationComponent },
  { path: "admin-login", component:AdminLoginComponent },
  { 
    path: "customer-dashboard", 
    component: CustomerDashboardComponent,
    children: [
      { path: '', redirectTo: 'my-account', pathMatch: 'full'},
      { path: "my-account", component: MyAccountComponent }
      // Add other child routes here
    ] 
  },
  {
    path: "admin-dashboard",
    component: AdminDashboardComponent,
    children: [
      { path: '', redirectTo: 'add-rooms', pathMatch: 'full' },
      { path: "manage-rooms", component: ManageRoomsComponent },
      { path: "add-rooms", component: AddRoomsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
