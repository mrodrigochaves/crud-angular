import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { ParkingComponent } from './parking/parking.component';
import { FleetComponent } from './fleet/fleet.component';


@NgModule({
  declarations: [
    ParkingComponent,
    FleetComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ]
})
export class CarsModule { }
