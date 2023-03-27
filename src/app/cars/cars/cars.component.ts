import { Component } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  cars: Car[] = [
    {_id:1, name: 'Gol', category: 'Volkswagen', color:'Preto', km_out:80124, km_in:89241},
    {_id:2, name: 'Corsa', category: 'Chevrolet',color:'Branco', km_out:70124 , km_in:74231 }
  ];
  displayedColumns = ['name', 'category', 'color', 'km_out', 'km_in'];

  constructor(){
    //this.cars = [];
  }

}
