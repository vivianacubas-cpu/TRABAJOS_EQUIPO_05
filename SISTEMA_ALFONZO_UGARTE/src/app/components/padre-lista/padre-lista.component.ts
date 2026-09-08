import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Padre } from '../../models/padre.model';
import { PadreCardComponent } from '../padre-card/padre-card.component';

@Component({
  selector: 'app-padre-lista',
  standalone: true,
  imports: [CommonModule, PadreCardComponent],
  templateUrl: './padre-lista.component.html',
  styleUrl: './padre-lista.component.css'
})
export class PadreListaComponent {
  @Input() padres: Padre[] = [];
  @Output() eliminar = new EventEmitter<number>();
  @Output() restaurar = new EventEmitter<number>();
}