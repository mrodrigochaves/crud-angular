import { catchError } from 'rxjs/operators';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';

import { Car } from '../model/car';
import { CarsService } from './../services/cars.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

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
    this.cars$ = this.carsService.list()
    .pipe(
      catchError(error => {
        this.onError('Error loading cars!');
        return of([])
  })
    );
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg
    });
  }

}
