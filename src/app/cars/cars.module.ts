import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { CarsRoutingModule } from './cars-routing.module';
import { FleetComponent } from './fleet/fleet.component';
import { ParkingComponent } from './parking/parking.component';

@NgModule({
  declarations: [
    ParkingComponent,
    FleetComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatGridListModule
  ]
})
export class CarsModule { }
