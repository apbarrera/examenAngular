import { Routes } from '@angular/router';
import { CartasComponent } from './shared/cartas/cartas.component';

export const routes: Routes = [
  { path: 'recursos', component: CartasComponent },
  { path: '', redirectTo: '/recursos', pathMatch: 'full' }
];
