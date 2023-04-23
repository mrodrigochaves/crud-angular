import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarFormComponent } from './containers/car-form/car-form.component';
import { CarsComponent } from './containers/cars/cars.component';
import { CarResolver } from './guards/car.resolver';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'new', component: CarFormComponent, resolve:{ car: CarResolver}},
  { path:'edit/:id',component: CarFormComponent, resolve:{ car: CarResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
