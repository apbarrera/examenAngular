import { Component } from '@angular/core';

@Component({
  selector: 'app-card-album',
  imports: [],
  templateUrl: './card-album.component.html',
  styleUrl: './card-album.component.css'
})

export class CardAlbumComponent {
  cards = [
    { text: 'This is a wider card with supporting text.', time: '9 mins' },
    { text: 'Another example of a card with some content.', time: '5 mins' },
    { text: 'This card has different text and a new time.', time: '12 mins' },
    { text: 'More content to show in this album.', time: '7 mins' },
    { text: 'Angular makes it easy to create dynamic UIs.', time: '10 mins' }
  ];

}
