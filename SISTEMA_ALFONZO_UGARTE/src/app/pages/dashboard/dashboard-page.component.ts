import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="dashboard page-shell reveal">
      <div class="title-group">
        <span class="eyebrow">PANEL GENERAL</span>
        <h1>Dashboard académico</h1>
      </div>

      <div class="stats-grid">
        <article class="stat-card">
          <div class="icon">👩‍🎓</div>
          <div>
            <small>Estudiantes</small>
            <strong>{{ total }}</strong>
          </div>
        </article>

        <article class="stat-card">
          <div class="icon">📚</div>
          <div>
            <small>Grados</small>
            <strong>{{ totalGrados }}</strong>
          </div>
        </article>

        <article class="stat-card">
          <div class="icon">🧩</div>
          <div>
            <small>Secciones</small>
            <strong>{{ totalSecciones }}</strong>
          </div>
        </article>
      </div>

      <div class="panel-grid">
        <article class="panel-card">
          <h2>Por grado</h2>
          <ul>
            <li *ngFor="let item of estadisticasGrados | keyvalue">
              <span>{{ item.key }}</span>
              <strong>{{ item.value }}</strong>
            </li>
          </ul>
        </article>

        <article class="panel-card">
          <h2>Por sección</h2>
          <ul>
            <li *ngFor="let item of estadisticasSecciones | keyvalue">
              <span>Sección {{ item.key }}</span>
              <strong>{{ item.value }}</strong>
            </li>
          </ul>
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
      .dashboard {
        animation: fadeUp 0.7s ease both;
      }
      .title-group {
        margin-bottom: 26px;
      }
      .eyebrow {
        color: #d52e7e;
        font-weight: 800;
        letter-spacing: 0.16em;
        font-size: 0.72rem;
      }
      h1 {
        margin: 10px 0 0;
        color: #2d2430;
        font-size: clamp(2rem, 3vw, 3rem);
      }
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(180px, 1fr));
        gap: 18px;
      }
      .stat-card {
        display: flex;
        align-items: center;
        gap: 16px;
        border: 1px solid #f3dfe9;
        background: #fff;
        border-radius: 22px;
        padding: 20px 24px;
        box-shadow: 0 10px 30px rgba(54, 39, 50, 0.04);
        animation: riseIn 0.6s ease both;
      }
      .stat-card:nth-child(2) { animation-delay: 0.1s; }
      .stat-card:nth-child(3) { animation-delay: 0.2s; }
      .icon {
        width: 54px;
        height: 54px;
        display: grid;
        place-items: center;
        border-radius: 16px;
        background: #fff0f7;
        font-size: 1.7rem;
      }
      .stat-card small {
        display: block;
        color: #8d7d86;
        letter-spacing: 0.12em;
        font-size: 0.7rem;
      }
      .stat-card strong {
        display: block;
        margin-top: 4px;
        color: #2d2430;
        font-size: 2rem;
      }
      .panel-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(260px, 1fr));
        gap: 20px;
        margin-top: 24px;
      }
      .panel-card {
        background: #fff;
        border: 1px solid #f1dfe7;
        border-radius: 22px;
        padding: 22px 24px;
        box-shadow: 0 10px 28px rgba(54, 39, 50, 0.04);
      }
      h2 {
        margin: 0 0 16px;
        color: #332b31;
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 10px;
      }
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff9fb;
        border-radius: 12px;
        padding: 12px 14px;
        color: #5d4d57;
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes riseIn {
        from { opacity: 0; transform: translateY(12px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 720px) {
        .stats-grid, .panel-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class DashboardPageComponent implements OnInit {
  total = 0;
  totalGrados = 0;
  totalSecciones = 0;
  estadisticasGrados: Record<string, number> = {};
  estadisticasSecciones: Record<string, number> = {};

  constructor(private estudianteService: EstudianteService) {}

  ngOnInit(): void {
    const data = this.estudianteService.getEstadisticas();
    this.total = data.total;
    this.estadisticasGrados = data.grados;
    this.estadisticasSecciones = data.secciones;
    this.totalGrados = Object.keys(data.grados).length;
    this.totalSecciones = Object.keys(data.secciones).length;
  }
}
