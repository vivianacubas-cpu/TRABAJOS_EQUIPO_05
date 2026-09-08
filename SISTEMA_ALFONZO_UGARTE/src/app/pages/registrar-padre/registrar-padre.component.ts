import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Padre } from '../../models/padre.model';
import { PadreService } from '../../services/padre.service';
import { PadreFormularioComponent } from '../../components/padre-formulario/padre-formulario.component';

@Component({
  selector: 'app-registrar-padre',
  standalone: true,
  imports: [CommonModule, PadreFormularioComponent],
  templateUrl: './registrar-padre.component.html',
  styleUrl: './registrar-padre.component.css'
})
export class RegistrarPadreComponent {
  constructor(private padreService: PadreService, private router: Router) {}

  onGuardar(padre: Padre): void {
    this.padreService.crear(padre).subscribe({
      next: () => this.router.navigate(['/padres']),
      error: (err) => console.error('Error al crear padre', err)
    });
  }

  onCancelar(): void {
    this.router.navigate(['/padres']);
  }
}