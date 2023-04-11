import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {

  form: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private service: CarsService,
    private snackBar: MatSnackBar,
    private location: Location
    ){
    this.form = this.formBuilder.group({
      name: [null],
      category: [null],
      color: [null],
      kmIn: [null],
      kmOut: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value).subscribe(result => this.onSucess(), error => this.onError());
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
