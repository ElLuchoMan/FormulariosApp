import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('Rtx 3080 Ti'),
  //   precio: new FormControl(3458645),
  //   existencias: new FormControl(150)
  // })

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]],
  })
  constructor(private fb: FormBuilder) { }
  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }
  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
           return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
