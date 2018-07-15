import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICar } from '../model/ICar';
import { CarService } from '../service/car.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(private _router:Router,private _carService:CarService) { }
    selectedCar:ICar;
  ngOnInit() {
      this.selectedCar =  this._carService.userSelectedCar;
  }

  goToCarList(e:any):void{
        this._router.navigate(['./carlist']);
  }

}
