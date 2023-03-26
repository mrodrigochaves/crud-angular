import { Component } from '@angular/core';

import { Cars } from './../model/cars';

@Component({
  selector: 'app-fleet',
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent {

  cars: Cars[] = [
    {_id:'1', name:'Gol', category:'Volkswagen'}
  ];

  displayedColumns = ['name', 'category'];

  constructor(){
    this.cars = [];
  }

}
