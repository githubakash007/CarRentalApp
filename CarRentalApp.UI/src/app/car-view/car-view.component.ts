import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ICar } from '../model/ICar';

@Component({
  selector: 'car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {

  constructor() { }
   
  @Input() car:ICar;
  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){

    let inputCar = change["car"];
    if(inputCar){
        console.log("input car value is - ")
        console.log(inputCar);
    }

  }

}
