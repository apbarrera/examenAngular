import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { CardAlbumComponent } from './shared/card-album/card-album.component';
import { RecursosService } from './servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';
import { Foto } from './interfaz/foto'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactoComponent, CardAlbumComponent, HttpClientModule],
  providers: [RecursosService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo1';

  cards = [
    { text: 'Card 1', time: '5 mins' }, { text: 'Card 2', time: '10 mins' },
    { text: 'Card 3', time: '15 mins' }, { text: 'Card 4', time: '20 mins' },
    { text: 'Card 5', time: '25 mins' }, { text: 'Card 6', time: '30 mins' },
    { text: 'Card 7', time: '35 mins' }, { text: 'Card 8', time: '40 mins' },
    { text: 'Card 9', time: '45 mins' }, { text: 'Card 10', time: '50 mins' },
    { text: 'Card 11', time: '55 mins' }, { text: 'Card 12', time: '60 mins' }
  ];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe(respuesta => {
      this.cards = respuesta as Foto[];
    })
  }
}
