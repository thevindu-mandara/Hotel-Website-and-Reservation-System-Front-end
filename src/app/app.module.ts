import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GreetingRegComponent } from './pages/greeting-reg/greeting-reg.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { SidebarDashComponent } from './common/sidebar-dash/sidebar-dash.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { TulipComponent } from './pages/tulip/tulip.component';
import { LunettaComponent } from './pages/lunetta/lunetta.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminSidebarDashComponent } from './common/admin-sidebar-dash/admin-sidebar-dash.component';
import { ManageRoomsComponent } from './pages/manage-rooms/manage-rooms.component';
import { AddRoomsComponent } from './pages/add-rooms/add-rooms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AccommodationComponent,
    GalleryComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignUpComponent,
    GreetingRegComponent,
    CustomerDashboardComponent,
    SidebarDashComponent,
    MyAccountComponent,
    TulipComponent,
    LunettaComponent,
    ReservationComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    AdminSidebarDashComponent,
    ManageRoomsComponent,
    AddRoomsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
