import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from '../model/car';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {

@Input()  cars: Car[] = [];
@Output() add = new EventEmitter(false);

readonly displayedColumns = ['_id','name', 'category', 'color', 'km_out', 'km_in', 'actions'];


  constructor(){}

  ngOnInit(): void{}

  onAdd(){
    this.add.emit(true);
  }

}
