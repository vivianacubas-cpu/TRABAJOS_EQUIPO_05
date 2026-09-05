import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Estudiante } from '../../models/estudiante.model';

@Component({
  selector: 'app-estudiante-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante-formulario.component.html',
  styleUrl: './estudiante-formulario.component.css'
})
export class EstudianteFormularioComponent implements OnChanges {
  @Input() estudiante: Estudiante | null = null;
  @Output() guardar = new EventEmitter<Estudiante>();
  @Output() cerrar = new EventEmitter<void>();

  modelo: Estudiante = this.vacio();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['estudiante']) {
      this.modelo = this.estudiante ? { ...this.estudiante } : this.vacio();
    }
  }

  enviar(): void {
    if (!this.modelo.nombres.trim() || !this.modelo.apellidos.trim() || !this.modelo.codigo.trim()) return;
    this.guardar.emit({ ...this.modelo });
  }

  private vacio(): Estudiante {
    return { id: 0, codigo: '', nombres: '', apellidos: '', grado: '1° Secundaria', seccion: 'A', edad: 12 };
  }
}