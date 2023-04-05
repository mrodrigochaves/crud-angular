import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SharedModule } from '../shared/shared.module';
import { CarFormComponent } from './car-form/car-form.component';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars/cars.component';

@NgModule({
  declarations: [
    CarsComponent,
    CarFormComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule

  ]
})
export class CarsModule { }
