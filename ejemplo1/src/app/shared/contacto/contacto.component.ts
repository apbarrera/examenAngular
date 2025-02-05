import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  titulo:string = "Contactos"

  medios:any[] = [
    {"texto":"En twitter"},
    {"texto":"En facebook"},
    {"texto":"Por correo electrónico"}
  ]

}
