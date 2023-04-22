import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Car } from '../../model/car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent {
  cars$: Observable<Car[]>;

  displayedColumns = ['_id','name', 'category', 'color', 'km_out', 'km_in', 'actions'];


  // carsService: CarsService;

  constructor(private carsService: CarsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute

    ) {

    this.cars$ = this.carsService.list()
    .pipe(
      catchError(_error => {
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

  ngOnInit(): void{}

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
