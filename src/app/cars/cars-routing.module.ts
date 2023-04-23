import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CarsComponent } from './containers/cars/cars.component';
import { CarFormComponent } from './containers/car-form/car-form.component';

const routes: Routes = [
  { path: '', component: CarsComponent },
  { path: 'new', component: CarFormComponent },
  { path:'edit/:id',component: CarFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
