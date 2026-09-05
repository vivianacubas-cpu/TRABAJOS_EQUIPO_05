import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Estudiante } from '../../models/estudiante.model';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-registrar-estudiante-page',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <section class="page-shell reveal">
      <div class="form-card">
        <div class="header">
          <span class="eyebrow">NUEVO REGISTRO</span>
          <h1>Registrar estudiante</h1>
          <p>Completa la información del estudiante para agregarlo al sistema escolar.</p>
        </div>

        <form #form="ngForm" (ngSubmit)="guardar(form)" novalidate>
          <div class="field-grid">
            <label>
              <span>Código</span>
              <input name="codigo" [(ngModel)]="modelo.codigo" required />
            </label>
            <label>
              <span>Edad</span>
              <input name="edad" type="number" min="10" max="25" [(ngModel)]="modelo.edad" required />
            </label>
            <label>
              <span>Nombres</span>
              <input name="nombres" [(ngModel)]="modelo.nombres" required />
            </label>
            <label>
              <span>Apellidos</span>
              <input name="apellidos" [(ngModel)]="modelo.apellidos" required />
            </label>
            <label>
              <span>Grado</span>
              <select name="grado" [(ngModel)]="modelo.grado">
                <option value="1° Secundaria">1° Secundaria</option>
                <option value="2° Secundaria">2° Secundaria</option>
                <option value="3° Secundaria">3° Secundaria</option>
                <option value="4° Secundaria">4° Secundaria</option>
                <option value="5° Secundaria">5° Secundaria</option>
              </select>
            </label>
            <label>
              <span>Sección</span>
              <select name="seccion" [(ngModel)]="modelo.seccion">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </label>
          </div>

          <div class="feedback" *ngIf="mensaje">
            {{ mensaje }}
          </div>

          <div class="actions">
            <button type="button" class="cancel-btn" [routerLink]="['/estudiantes']">Cancelar</button>
            <button type="submit" class="submit-btn">Guardar estudiante</button>
          </div>
        </form>
      </div>
    </section>
  `,
  styles: [
    `
      .page-shell {
        width: min(1160px, 92%);
        margin: 0 auto;
        padding: 48px 0 60px;
      }
      .reveal { animation: fadeUp 0.7s ease both; }
      .form-card {
        background: #fff;
        border: 1px solid #f1dfe7;
        border-radius: 26px;
        padding: 28px;
        box-shadow: 0 16px 40px rgba(51, 35, 42, 0.05);
      }
      .header {
        margin-bottom: 22px;
      }
      .eyebrow {
        color: #d52e7e;
        font-weight: 800;
        letter-spacing: 0.16em;
        font-size: 0.7rem;
      }
      h1 { margin: 10px 0 8px; color: #2d2430; }
      p { margin: 0; color: #766972; }
      .field-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        gap: 18px;
      }
      label {
        display: flex;
        flex-direction: column;
        gap: 8px;
        color: #524b51;
        font-weight: 600;
      }
      input, select {
        border: 1px solid #ebdfe7;
        border-radius: 12px;
        min-height: 48px;
        padding: 0 14px;
        font: inherit;
        outline: none;
        transition: border-color 0.2s ease, box-shadow 0.2s ease;
      }
      input:focus, select:focus {
        border-color: #d52e7e;
        box-shadow: 0 0 0 4px rgba(213, 46, 126, 0.08);
      }
      .feedback {
        margin-top: 16px;
        padding: 12px 14px;
        border-radius: 12px;
        background: #fff0f7;
        color: #b72369;
        font-weight: 600;
      }
      .actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 22px;
      }
      .cancel-btn, .submit-btn {
        border: none;
        min-height: 46px;
        border-radius: 12px;
        padding: 0 18px;
        cursor: pointer;
        font-weight: 700;
        transition: transform 0.2s ease;
      }
      .cancel-btn {
        background: #f5f1f3;
        color: #6b5f65;
      }
      .submit-btn {
        background: #d52e7e;
        color: white;
        box-shadow: 0 10px 22px rgba(213, 46, 126, 0.2);
      }
      .cancel-btn:hover, .submit-btn:hover {
        transform: translateY(-2px);
      }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 720px) {
        .field-grid { grid-template-columns: 1fr; }
        .actions { flex-direction: column-reverse; }
        .cancel-btn, .submit-btn { width: 100%; }
      }
    `
  ]
})
export class RegistrarEstudiantePageComponent implements OnInit {
  modelo: Estudiante = {
    id: 0,
    codigo: '',
    nombres: '',
    apellidos: '',
    grado: '1° Secundaria',
    seccion: 'A',
    edad: 12
  };
  mensaje = '';

  constructor(private estudianteService: EstudianteService, private router: Router) {}

  ngOnInit(): void {}

  guardar(form: any): void {
    if (form.invalid || !this.modelo.nombres.trim() || !this.modelo.apellidos.trim() || !this.modelo.codigo.trim()) {
      this.mensaje = 'Todos los campos son obligatorios.';
      return;
    }

    this.estudianteService.crear({ ...this.modelo });
    this.mensaje = 'Estudiante registrado correctamente.';
    this.router.navigate(['/estudiantes']);
  }
}
