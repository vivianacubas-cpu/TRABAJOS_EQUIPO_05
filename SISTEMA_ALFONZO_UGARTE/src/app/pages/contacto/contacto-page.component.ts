import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contacto-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-shell reveal">
      <div class="card">
        <span class="eyebrow">CONTACTO</span>
        <h1>Institución Educativa Alfonso Ugarte</h1>

        <div class="contact-grid">
          <div class="info-box">
            <h3>Información general</h3>
            <ul>
              <li><strong>Dirección:</strong> Av. Principal, distrito educativo</li>
              <li><strong>Teléfono:</strong> (01) 456-7890</li>
              <li><strong>Email:</strong> contacto&#64;alfonsougarte.edu.pe</li>
            </ul>
          </div>

          <div class="info-box">
            <h3>Proyecto académico</h3>
            <p>
              Sistema web desarrollado para gestionar estudiantes del nivel secundario mediante un CRUD completo,
              con vista de lista, búsqueda, registro, edición, detalle y dashboard académico.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .page-shell {
        width: min(1100px, 92%);
        margin: 0 auto;
        padding: 48px 0 60px;
      }
      .reveal { animation: fadeUp 0.7s ease both; }
      .card {
        background: #fff;
        border: 1px solid #f1dfe7;
        border-radius: 28px;
        padding: 30px;
        box-shadow: 0 12px 36px rgba(51, 35, 42, 0.04);
      }
      .eyebrow {
        color: #d52e7e;
        font-weight: 800;
        letter-spacing: 0.15em;
        font-size: 0.7rem;
      }
      h1 { margin: 12px 0 26px; color: #2d2430; }
      .contact-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        gap: 18px;
      }
      .info-box {
        background: #fff9fb;
        border: 1px solid #f2dfe8;
        border-radius: 20px;
        padding: 22px;
      }
      h3 { margin-top: 0; color: #2d2430; }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 12px;
        color: #5e4f58;
      }
      p { color: #5e4f58; line-height: 1.8; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 680px) {
        .contact-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class ContactoPageComponent {}
