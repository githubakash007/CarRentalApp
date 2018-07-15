import { Component, OnInit } from '@angular/core';
import { CarService } from '../service/car.service';
import { ICar } from '../model/ICar';

@Component({
  selector: 'car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private _carService:CarService) { }
  carList:ICar[] = []; 


  ngOnInit() {
    this._carService.getAllCars().subscribe(cars => this.carList = cars);
  }

}
