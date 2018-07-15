import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CarViewComponent } from './car-view/car-view.component';
import { CarListComponent } from './car-list/car-list.component';
import { CarService } from './service/car.service';


@NgModule({
  declarations: [
    AppComponent,
    CarViewComponent,
    CarListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
