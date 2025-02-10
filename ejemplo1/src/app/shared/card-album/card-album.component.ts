import { Component, Input } from '@angular/core';
import { Foto } from '../../interfaz/foto';

@Component({
  selector: 'app-card-album',
  imports: [],
  templateUrl: './card-album.component.html',
  styleUrl: './card-album.component.css'
})

export class CardAlbumComponent {
  @Input() cards: Foto[] = []; // Definiendo el tipo correctamente
}