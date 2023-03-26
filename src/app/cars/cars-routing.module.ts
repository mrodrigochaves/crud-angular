import { FleetComponent } from './fleet/fleet.component';
import { ParkingComponent } from './parking/parking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'fleet', component: FleetComponent },
  { path: '', component: ParkingComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }