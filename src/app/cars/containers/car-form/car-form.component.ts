import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CarsService } from '../../services/cars.service';

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
    kmIn: [''],
    kmOut: ['']
  });

  constructor( private formBuilder: NonNullableFormBuilder,
    private service: CarsService,
    private snackBar: MatSnackBar,
    private location: Location) {
  }

  ngOnInit(): void {

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
