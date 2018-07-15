import { Routes } from '@angular/router';
import { CarListComponent } from "./car-list/car-list.component";
import { ReservationComponent } from "./reservation/reservation.component";

export const AppRoutes:Routes =[
    {
        path:'',
        redirectTo:"carlist",
        pathMatch:'full'
    },
    {
      path:"carlist",
       component:CarListComponent
    },
    {
        path:"reservation",
        component:ReservationComponent

    },
];