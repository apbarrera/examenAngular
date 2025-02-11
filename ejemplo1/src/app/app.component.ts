import { Component } from '@angular/core';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { CardAlbumComponent } from './shared/card-album/card-album.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ContactoComponent,CardAlbumComponent,TituloComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo1';
}
