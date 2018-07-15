import { Component, OnInit, Input, SimpleChanges,OnDestroy, EventEmitter, Output } from '@angular/core';
import { ICar } from '../model/ICar';
import { Router } from '@angular/router';

@Component({
  selector: 'car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit,OnDestroy {

  constructor(private _router:Router) { }
   
  @Input() car:ICar;
  @Output() selectedCar = new EventEmitter<ICar>();
  ngOnInit() {
  }

  ngOnChanges(change:SimpleChanges){

    let inputCar = change["car"];
    if(inputCar){
        console.log("input car value is - ")
        console.log(inputCar);
    }

  }

  goToReservation(e:any,userSelectedCar:ICar):void{
   this.selectedCar.emit(userSelectedCar);
   this._router.navigate(['./reservation']);
  }

  ngOnDestroy():void{
   
  }

}
