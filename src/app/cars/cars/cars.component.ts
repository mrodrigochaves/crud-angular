import { CarsService } from './../services/cars.service';
import { Component } from '@angular/core';
import { Car } from '../model/car';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  cars$: Observable<Car[]>;

  displayedColumns = ['name', 'category', 'color', 'km_out', 'km_in'];

  // carsService: CarsService;

  constructor( private carsService: CarsService ){
    //this.cars = [];
    //this.carsService = new CarsService();
    this.cars$ = this.carsService.list();
  }

}
