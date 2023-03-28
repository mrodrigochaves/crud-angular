import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { Car } from '../model/car';
import { CarsService } from './../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  cars$: Observable<Car[]>;

  displayedColumns = ['name', 'category', 'color', 'km_out', 'km_in'];

  // carsService: CarsService;

  constructor(private carsService: CarsService, public dialog: MatDialog) {
    //this.cars = [];
    //this.carsService = new CarsService();
    this.cars$ = this.carsService.list();
  }
}
