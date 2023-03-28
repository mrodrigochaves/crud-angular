import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car} from '../model/car';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private readonly API = '/assets/cars.json';

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Car[]>(this.API)
    .pipe(
      first(),
      delay(15000),
      tap( cars => console.log(cars))
    );
  }
}
