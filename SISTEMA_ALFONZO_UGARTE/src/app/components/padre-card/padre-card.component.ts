import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Padre } from '../../models/padre.model';

@Component({
  selector: 'app-padre-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './padre-card.component.html',
  styleUrl: './padre-card.component.css'
})
export class PadreCardComponent {
  @Input() padre!: Padre;
  @Output() eliminar = new EventEmitter<number>();
  @Output() restaurar = new EventEmitter<number>();

  onEliminar(): void {
    if (this.padre.id) {
      this.eliminar.emit(this.padre.id);
    }
  }

  onRestaurar(): void {
    if (this.padre.id) {
      this.restaurar.emit(this.padre.id);
    }
  }
}