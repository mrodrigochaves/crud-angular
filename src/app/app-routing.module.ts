import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'fleet', pathMatch: 'full', redirectTo: 'fleet' },
  {path: '', pathMatch: 'full', redirectTo: 'parking' },
  {path: 'parking',
    loadChildren: ()=> import('./cars/cars.module').then(m => m.CarsModule)
  },
  {path: 'fleet',
    loadChildren: ()=> import('./cars/cars.module').then(m => m.CarsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
