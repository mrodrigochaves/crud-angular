import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';

import { CarsRoutingModule } from './cars-routing.module';
import { FleetComponent } from './fleet/fleet.component';


@NgModule({
  declarations: [
    FleetComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatGridListModule,
    MatTableModule

  ]
})
export class CarsModule { }
