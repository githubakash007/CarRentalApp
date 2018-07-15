import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RentalCarApiName } from "./../enum/rentalCarApiName.enum";
import { ICar } from "./../model/ICar";
import { Observable } from "rxjs/Observable";
import { catchError, finalize } from "rxjs/operators";
import { of } from 'rxjs/observable/of';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CarService {

     selectedCar:ICar;
    constructor(private _httpClient: HttpClient) { }

    getAllCars():Observable<ICar[]>{
        return this._httpClient.get<ICar[]>(this.getRelativeUrl(RentalCarApiName.getAllCars),httpOptions).pipe(
            catchError(() => of(null)),
            finalize(() => console.log("variant data has arrived--hahaha"))
        ); 
    }

    private getRelativeUrl(relativeUrl: RentalCarApiName | string): string {
        let apiBaseUrl = "http://localhost:52239/";
        let url = apiBaseUrl + relativeUrl.toString();
        console.log(`url is ${url}`);
        return url;
    }

    set userSelectedCar(car:ICar){
        this.selectedCar = car;
    }

    get userSelectedCar():ICar{
        return this.selectedCar;
    }


    
}