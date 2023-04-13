import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../model/car';
import { first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private readonly API = '/api/cars';
  dialog: any;

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Car[]>(this.API).
    pipe(
      first(),
      tap(cars => console.log(cars))
    );
  }


  save(record: Partial<Car>){
  return  this.httpClient.post<Car>(this.API, record).pipe(first());
  }
}
