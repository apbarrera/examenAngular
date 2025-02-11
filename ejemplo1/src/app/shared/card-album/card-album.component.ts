import { Component, Input } from '@angular/core';
import { Foto } from '../../interfaz/foto';
import { RecursosService } from '../../servicios/recursos.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-album',
  imports: [HttpClientModule],
  providers: [RecursosService],
  templateUrl: './card-album.component.html',
  styleUrl: './card-album.component.css'
})

export class CardAlbumComponent {
  //@Input() cards2: Foto[] = []; // Definiendo el tipo correctamente
  fotos:Foto[]=[];

  cards = [
    {id:1, text: 'Card 1', time: '5 mins' }, 
    {id:2, text: 'Card 2', time: '10 mins' },
    {id:3, text: 'Card 3', time: '15 mins' }, 
    {id:4, text: 'Card 4', time: '20 mins' },
    {id:5, text: 'Card 5', time: '25 mins' }, 
    {id:6, text: 'Card 6', time: '30 mins' },
    {id:7, text: 'Card 7', time: '35 mins' }, 
    {id:8, text: 'Card 8', time: '40 mins' },
    {id:9, text: 'Card 9', time: '45 mins' }, 
    {id:10, text: 'Card 10', time: '50 mins' },
    {id:11, text: 'Card 11', time: '55 mins' }, 
    {id:12, text: 'Card 12', time: '60 mins' }
  ];

  constructor(private recursosService: RecursosService) {
    recursosService.obtenerDatos().subscribe((respuesta) => {
      console.log(this.fotos)
      this.fotos = respuesta as Foto[];
    });
  }
}