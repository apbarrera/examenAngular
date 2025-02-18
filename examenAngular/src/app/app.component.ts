import { Component } from '@angular/core';
import { PiePaginaComponent } from './shared/pie-pagina/pie-pagina.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { DatosComponent } from './shared/datos/datos.component';

@Component({
  selector: 'app-root',
  imports: [PiePaginaComponent, CarruselComponent, DatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'examenAngular';
}
