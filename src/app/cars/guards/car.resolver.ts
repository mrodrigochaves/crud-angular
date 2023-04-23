import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Car } from '../model/car';
import { CarsService } from './../services/cars.service';

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<Car> {

  constructor(private service: CarsService ){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Car> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({_id:'', name:'', category:'', color:'', km_out:'', km_in:''});
  }
}
