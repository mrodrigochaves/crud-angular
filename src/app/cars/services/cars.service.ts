import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../model/car';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private readonly API = 'http://localhost:8080/api/cars';
  dialog: any;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Car[]>(this.API).pipe(
      catchError((error) => {
        this.onError('Erro ao carregar a lista!')
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }
}
