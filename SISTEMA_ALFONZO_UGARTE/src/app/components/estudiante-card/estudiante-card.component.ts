import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../models/estudiante.model';

@Component({
  selector: 'app-estudiante-card',
  standalone: true,
  templateUrl: './estudiante-card.component.html',
  styleUrl: './estudiante-card.component.css'
})
export class EstudianteCardComponent {
  @Input() estudiante!: Estudiante;
  @Output() editar = new EventEmitter<Estudiante>();
  @Output() eliminar = new EventEmitter<number>();
}