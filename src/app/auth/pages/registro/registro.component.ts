import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerLuchoman } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerLuchoman]],
  })
  constructor(private fb: FormBuilder, private validatorService: ValidatorService) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Bryan Luis',
      email: 'luchoman96@gmail.com',
      username: 'Luchoman'
    });
  }
  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }
}
