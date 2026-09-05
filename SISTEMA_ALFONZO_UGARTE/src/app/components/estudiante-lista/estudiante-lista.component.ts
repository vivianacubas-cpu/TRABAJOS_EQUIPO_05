import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteCardComponent } from '../estudiante-card/estudiante-card.component';

@Component({
  selector: 'app-estudiante-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, EstudianteCardComponent],
  templateUrl: './estudiante-lista.component.html',
  styleUrl: './estudiante-lista.component.css'
})
export class EstudianteListaComponent {
  @Input() estudiantes: Estudiante[] = [];
  @Output() editar = new EventEmitter<Estudiante>();
  @Output() eliminar = new EventEmitter<number>();
  filtro = '';

  get filtrados(): Estudiante[] {
    const texto = this.filtro.trim().toLowerCase();
    if (!texto) return this.estudiantes;
    return this.estudiantes.filter(e =>
      `${e.nombres} ${e.apellidos} ${e.codigo} ${e.grado}`.toLowerCase().includes(texto)
    );
  }
}