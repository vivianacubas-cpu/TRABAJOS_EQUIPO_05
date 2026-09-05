import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-detalle-estudiante-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-shell reveal" *ngIf="estudiante; else noEncontrado">
      <div class="detail-card">
        <div class="header-row">
          <div>
            <span class="eyebrow">FICHA ESTUDIANTIL</span>
            <h1>{{ estudiante.nombres }} {{ estudiante.apellidos }}</h1>
          </div>
          <a routerLink="/estudiantes" class="secondary-btn">← Volver</a>
        </div>

        <div class="profile-grid">
          <div class="avatar-box">{{ estudiante.nombres.charAt(0) }}{{ estudiante.apellidos.charAt(0) }}</div>
          <div class="info-box">
            <div class="info-item"><span>Código</span><strong>{{ estudiante.codigo }}</strong></div>
            <div class="info-item"><span>Grado</span><strong>{{ estudiante.grado }}</strong></div>
            <div class="info-item"><span>Sección</span><strong>{{ estudiante.seccion }}</strong></div>
            <div class="info-item"><span>Edad</span><strong>{{ estudiante.edad }} años</strong></div>
          </div>
        </div>
      </div>
    </section>

    <ng-template #noEncontrado>
      <section class="page-shell reveal">
        <div class="empty-state">No se encontró información del estudiante.</div>
      </section>
    </ng-template>
  `,
  styles: [
    `
      .page-shell {
        width: min(1080px, 92%);
        margin: 0 auto;
        padding: 48px 0 60px;
      }
      .reveal { animation: fadeUp 0.7s ease both; }
      .detail-card {
        background: #fff;
        border: 1px solid #f1dee7;
        border-radius: 28px;
        padding: 28px;
        box-shadow: 0 12px 36px rgba(51, 35, 42, 0.04);
      }
      .header-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
      }
      .eyebrow {
        color: #d52e7e;
        font-weight: 800;
        letter-spacing: 0.16em;
        font-size: 0.7rem;
      }
      h1 { margin: 10px 0 0; color: #2d2430; }
      .secondary-btn {
        text-decoration: none;
        background: #fff0f7;
        color: #d52e7e;
        border-radius: 12px;
        padding: 11px 16px;
        font-weight: 700;
      }
      .profile-grid {
        display: grid;
        grid-template-columns: 220px 1fr;
        gap: 26px;
        margin-top: 30px;
      }
      .avatar-box {
        width: 180px;
        height: 180px;
        border-radius: 28px;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, #ffd6e8, #f8a7c9);
        color: #9b215d;
        font-size: 3.2rem;
        font-weight: 800;
      }
      .info-box {
        display: grid;
        grid-template-columns: repeat(2, minmax(180px, 1fr));
        gap: 18px;
      }
      .info-item {
        background: #fff9fb;
        border: 1px solid #f2dfe8;
        border-radius: 16px;
        padding: 18px;
      }
      .info-item span {
        display: block;
        color: #8a7780;
        font-size: 0.72rem;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .info-item strong {
        display: block;
        margin-top: 8px;
        color: #2d2430;
        font-size: 1.15rem;
      }
      .empty-state {
        background: #fff;
        border: 1px solid #f1dfe7;
        border-radius: 18px;
        padding: 32px;
        text-align: center;
        color: #6d5f66;
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 760px) {
        .header-row { flex-direction: column; align-items: flex-start; }
        .profile-grid, .info-box { grid-template-columns: 1fr; }
        .avatar-box { width: 140px; height: 140px; }
      }
    `
  ]
})
export class DetalleEstudiantePageComponent implements OnInit {
  estudiante: Estudiante | null = null;

  constructor(private route: ActivatedRoute, private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.estudiante = this.estudianteService.getEstudiantePorId(id) ?? null;
  }
}
