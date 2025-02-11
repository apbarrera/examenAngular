import { Component } from '@angular/core';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { CardAlbumComponent } from './shared/card-album/card-album.component';
import { TituloComponent } from './shared/titulo/titulo.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MenuComponent } from './shared/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ContactoComponent,TituloComponent,FooterComponent, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo1';
}
