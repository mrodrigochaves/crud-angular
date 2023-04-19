import { Component } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {

  cars: Car[] = [];

}
