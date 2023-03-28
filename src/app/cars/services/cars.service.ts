import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private hhtpClient: HttpClient) { }

  list(): Car[] {
    return[
      {_id:1, name: 'Gol', category: 'Volkswagen', color:'Preto', km_out:80124, km_in:89241},
      {_id:2, name: 'Corsa', category: 'Chevrolet',color:'Branco', km_out:70124 , km_in:74231 }
    ]
  }
}
