import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule}  from '@angular/router';


import { AppComponent } from './app.component';
import { CarViewComponent } from './car-view/car-view.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarService } from './service/car.service';
import { ReservationComponent } from './reservation/reservation.component';
import { AppRoutes } from './app.route';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CarViewComponent,
    CarListComponent,
    ReservationComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes)
    
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
