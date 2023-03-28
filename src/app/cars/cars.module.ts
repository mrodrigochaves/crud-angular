import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    CarsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class CarsModule { }
