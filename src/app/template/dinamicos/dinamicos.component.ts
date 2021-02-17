import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
interface Persona {
  nombre: string,
  favoritos: Favorito[],
}
interface Favorito {
  id: number,
  nombre: string,
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Diana Garzón',
    favoritos: [
      { id: 1, nombre: 'Mario Bross' },
      { id: 2, nombre: 'Leap Ray' },
      { id: 3, nombre: 'Call of Dutty Mobile' }
    ]
  }
  guardar() {
    console.log('Formulario posteado');
  }
  agregarJuego() {
    const nuevoFavorito: Favorito = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    }
    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }
  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }


}
