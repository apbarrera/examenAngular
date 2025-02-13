import { Component, OnInit } from '@angular/core';
import { RecursoService } from '../../servicios/recurso.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cartas',
  imports: [HttpClientModule],
  providers: [RecursoService],
  templateUrl: './cartas.component.html',
  styleUrl: './cartas.component.css'
})
export class CartasComponent implements OnInit {
  meals: any[] = []; // Array para almacenar las comidas
  error: string = ''; // Variable para manejar errores

  constructor(private recursoService: RecursoService) {}

  ngOnInit(): void {
    this.fetchMeals();
  }

  fetchMeals(): void {
    this.recursoService.getMeals().subscribe({
      next: (response) => {
        this.meals = response.meals || []; // Si meals es null, se asigna un array vacío
      },
      error: (err) => {
        this.error = 'Error al cargar los datos';
        console.error('Error:', err);
      }
    });
  }
}