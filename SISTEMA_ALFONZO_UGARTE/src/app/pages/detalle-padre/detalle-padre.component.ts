import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Padre } from '../../models/padre.model';
import { PadreService } from '../../services/padre.service';

@Component({
  selector: 'app-detalle-padre',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalle-padre.component.html',
  styleUrl: './detalle-padre.component.css'
})
export class DetallePadreComponent implements OnInit {
  padre: Padre | null = null;

  constructor(private route: ActivatedRoute, private padreService: PadreService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.padreService.listarPorId(id).subscribe({
      next: (data) => (this.padre = data),
      error: (err) => console.error('Error al obtener padre', err)
    });
  }
}