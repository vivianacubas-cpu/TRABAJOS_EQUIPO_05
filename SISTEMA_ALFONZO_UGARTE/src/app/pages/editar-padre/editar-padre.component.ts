import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Padre } from '../../models/padre.model';
import { PadreService } from '../../services/padre.service';
import { PadreFormularioComponent } from '../../components/padre-formulario/padre-formulario.component';

@Component({
  selector: 'app-editar-padre',
  standalone: true,
  imports: [CommonModule, PadreFormularioComponent],
  templateUrl: './editar-padre.component.html',
  styleUrl: './editar-padre.component.css'
})
export class EditarPadreComponent implements OnInit {
  padre: Padre | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private padreService: PadreService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.padreService.listarPorId(id).subscribe({
      next: (data) => (this.padre = data),
      error: (err) => console.error('Error al obtener padre', err)
    });
  }

  onGuardar(datos: Padre): void {
    if (!this.padre?.id) return;
    this.padreService.editar(this.padre.id, datos).subscribe({
      next: () => this.router.navigate(['/padres']),
      error: (err) => console.error('Error al editar padre', err)
    });
  }

  onCancelar(): void {
    this.router.navigate(['/padres']);
  }
}