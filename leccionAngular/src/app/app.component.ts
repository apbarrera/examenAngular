import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InformacionComponent } from './shared/informacion/informacion.component';
import { CarruselComponent } from './shared/carrusel/carrusel.component';
import { PiepaginaComponent } from './shared/piepagina/piepagina.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarruselComponent, PiepaginaComponent, InformacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'leccionAngular';
}
