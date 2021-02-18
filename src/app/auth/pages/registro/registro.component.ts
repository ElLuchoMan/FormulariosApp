import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerLuchoman } from 'src/app/shared/validator/validaciones';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {
  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerLuchoman]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  })
  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.required) {
      return 'El email es obligatorio';
    } else if (errors?.pattern) {
      return 'El valor ingresado no tiene formato de correo';
    } else if (errors?.emailTomado) {
      return 'El correo ya está resgistrado';
    }
    return ''
  }

  constructor(private fb: FormBuilder, private validatorService: ValidatorService, private emailValidator: EmailValidatorService) { }
  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Bryan Luis',
      email: 'luchoman96@gmail.com',
      username: 'Luchoman',
      password: '123456',
      password2: '123456',
    });
  }
  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }
  submitFormulario() {
    this.miFormulario.markAllAsTouched();
  }


}
