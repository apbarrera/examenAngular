import { Component } from '@angular/core';

@Component({
  selector: 'app-titulo',
  imports: [],
  templateUrl: './titulo.component.html',
  styleUrl: './titulo.component.css'
})
export class TituloComponent {

  title: string = "Album Example";
  description:string="Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.";
  itemOne:string="Main call to action";
  itemTwo:string="Secondary action";
  
}
