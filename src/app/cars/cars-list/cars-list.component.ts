import { Component } from '@angular/core';
import { Car } from '../model/car';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss']
})
export class CarsListComponent {

  cars: Car[] = [];

  constructor(private router: Router, private route: ActivatedRoute){

  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
