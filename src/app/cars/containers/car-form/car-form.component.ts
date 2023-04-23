import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../model/car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: [''],
    category: [''],
    color: [''],
    kmOut: [''],
    kmIn: ['']
  });

  constructor( private formBuilder: NonNullableFormBuilder,
    private service: CarsService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const car: Car = this.route.snapshot.data['car'];
    this.form.setValue({
      name: car.name,
      category: car.category,
      color: car.color,
      kmOut: car.km_out,
      kmIn: car.km_in
    });
    console.log(car);
  }

  onSubmit(){
    this.service.save(this.form.value)
    .subscribe(result => this.onSucess(), error => this.onError());
  }

  onCancel(){
    this.location.back();
  }

  private onSucess(){
    this.snackBar.open('Curso salvo com sucesso!', '', {duration: 4000});
    this.onCancel();
  }

  private onError(){
    this.snackBar.open('Erro ao salvar carro!', '', {duration: 4000});
  }

}
