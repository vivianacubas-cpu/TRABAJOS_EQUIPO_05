import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Padre } from '../../models/padre.model';
import { PadreService } from '../../services/padre.service';
import { PadreListaComponent } from '../../components/padre-lista/padre-lista.component';

@Component({
  selector: 'app-padres',
  standalone: true,
  imports: [CommonModule, RouterModule, PadreListaComponent],
  templateUrl: './padres.component.html',
  styleUrl: './padres.component.css'
})
export class PadresComponent implements OnInit {
  padres: Padre[] = [];
  cargando = true;

  constructor(private padreService: PadreService) {}

  ngOnInit(): void {
    this.cargarPadres();
  }

  cargarPadres(): void {
    this.cargando = true;
    this.padreService.listarTodos().subscribe({
      next: (data) => {
        this.padres = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al listar padres', err);
        this.cargando = false;
      }
    });
  }

  onEliminar(id: number): void {
    this.padreService.eliminarLogico(id).subscribe(() => this.cargarPadres());
  }

  onRestaurar(id: number): void {
    this.padreService.restaurarLogico(id).subscribe(() => this.cargarPadres());
  }
}