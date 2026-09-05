import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-estudiantes-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section class="page-shell reveal">
      <div class="section-head">
        <div>
          <span class="eyebrow">REGISTRO ACADÉMICO</span>
          <h1>Estudiantes registrados</h1>
        </div>

        <div class="actions-row">
          <label class="search-box">
            <span>⌕</span>
            <input type="text" [(ngModel)]="filtro" placeholder="Buscar estudiante..." />
          </label>
          <a routerLink="/estudiantes/nuevo" class="primary-btn">+ Nuevo estudiante</a>
        </div>
      </div>

      <div class="empty-state" *ngIf="estudiantesFiltrados.length === 0">
        <h3>No hay estudiantes registrados.</h3>
        <p>Agrega el primer estudiante desde el formulario de registro.</p>
      </div>

      <div class="card-grid" *ngIf="estudiantesFiltrados.length > 0">
        <article class="student-card" *ngFor="let estudiante of estudiantesFiltrados; let i = index" [style.animation-delay.ms]="i * 70">
          <div class="card-header">
            <div class="avatar">{{ estudiante.nombres.charAt(0) }}{{ estudiante.apellidos.charAt(0) }}</div>
            <span class="code">{{ estudiante.codigo }}</span>
          </div>

          <h3>{{ estudiante.nombres }} {{ estudiante.apellidos }}</h3>

          <ul class="meta">
            <li>🎓 {{ estudiante.grado }}</li>
            <li>▣ Sección {{ estudiante.seccion }}</li>
            <li>◉ {{ estudiante.edad }} años</li>
          </ul>

          <div class="card-actions">
            <a class="ghost-btn" [routerLink]="['/estudiantes', estudiante.id]">Detalle</a>
            <a class="edit-btn" [routerLink]="['/estudiantes/editar', estudiante.id]">Editar</a>
            <button class="delete-btn" type="button" (click)="eliminar(estudiante.id)">Eliminar</button>
          </div>
        </article>
      </div>
    </section>
  `,
  styles: [
    `
      .page-shell {
        width: min(1180px, 92%);
        margin: 0 auto;
        padding: 48px 0 60px;
      }
      .reveal { animation: fadeUp 0.7s ease both; }
      .section-head {
        display: flex;
        justify-content: space-between;
        align-items: end;
        gap: 18px;
        margin-bottom: 24px;
      }
      .eyebrow {
        color: #d52e7e;
        font-weight: 800;
        letter-spacing: 0.16em;
        font-size: 0.72rem;
      }
      h1 { margin: 8px 0 0; color: #2d2430; font-size: clamp(2rem, 3vw, 2.7rem); }
      .actions-row {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }
      .search-box {
        display: flex;
        align-items: center;
        gap: 8px;
        border: 1px solid #ecdfe6;
        background: #fff;
        border-radius: 12px;
        padding: 0 12px;
        color: #d52e7e;
        min-width: 240px;
      }
      .search-box input {
        border: none;
        outline: none;
        background: transparent;
        padding: 12px 0;
        width: 100%;
        font: inherit;
      }
      .primary-btn, .ghost-btn, .edit-btn, .delete-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 42px;
        border-radius: 12px;
        text-decoration: none;
        border: none;
        cursor: pointer;
        font-weight: 700;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .primary-btn {
        background: #d52e7e;
        color: #fff;
        padding: 0 18px;
        box-shadow: 0 8px 18px rgba(213, 46, 126, 0.18);
      }
      .ghost-btn {
        background: #fff7fb;
        color: #d52e7e;
        padding: 0 12px;
      }
      .edit-btn {
        background: #fff0f7;
        color: #be2b6e;
        padding: 0 12px;
      }
      .delete-btn {
        background: #fff3f4;
        color: #bb4d5d;
        padding: 0 12px;
      }
      .primary-btn:hover, .ghost-btn:hover, .edit-btn:hover, .delete-btn:hover {
        transform: translateY(-2px);
      }
      .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 18px;
      }
      .student-card {
        background: #fff;
        border: 1px solid #f1dee7;
        border-radius: 22px;
        padding: 18px;
        box-shadow: 0 10px 28px rgba(52, 35, 42, 0.04);
        animation: riseCard 0.55s ease both;
      }
      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .avatar {
        width: 52px;
        height: 52px;
        border-radius: 18px;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, #ffd7ea, #f7a9ca);
        color: #9b2060;
        font-weight: 800;
      }
      .code {
        font-size: 0.7rem;
        font-weight: 800;
        color: #d52e7e;
        background: #fff0f7;
        border-radius: 10px;
        padding: 7px 10px;
      }
      h3 {
        margin: 18px 0 14px;
        color: #2d2430;
        min-height: 44px;
      }
      .meta {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 8px;
        color: #6d5f66;
        font-size: 0.82rem;
      }
      .card-actions {
        display: flex;
        gap: 8px;
        margin-top: 18px;
        flex-wrap: wrap;
      }
      .empty-state {
        background: #fff;
        border: 1px solid #f1dfe8;
        border-radius: 22px;
        padding: 42px 24px;
        text-align: center;
        color: #7d6973;
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes riseCard {
        from { opacity: 0; transform: translateY(18px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 760px) {
        .section-head {
          flex-direction: column;
          align-items: stretch;
        }
        .actions-row {
          flex-direction: column;
          align-items: stretch;
        }
        .search-box { min-width: 100%; }
      }
    `
  ]
})
export class EstudiantesPageComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  filtro = '';

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    this.estudiantes = this.estudianteService.getEstudiantes();
  }

  get estudiantesFiltrados(): Estudiante[] {
    const texto = this.filtro.trim().toLowerCase();
    if (!texto) {
      return this.estudiantes;
    }
    return this.estudiantes.filter((estudiante) =>
      `${estudiante.nombres} ${estudiante.apellidos} ${estudiante.codigo}`.toLowerCase().includes(texto)
    );
  }

  eliminar(id: number): void {
    const estudiante = this.estudiantes.find((item) => item.id === id);
    if (!estudiante) {
      return;
    }

    const confirmar = window.confirm(`¿Deseas eliminar a ${estudiante.nombres} ${estudiante.apellidos}?`);
    if (confirmar) {
      this.estudianteService.eliminar(id);
      this.estudiantes = this.estudianteService.getEstudiantes();
    }
  }
}
