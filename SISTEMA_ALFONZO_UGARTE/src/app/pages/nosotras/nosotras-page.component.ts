import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotras-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="page-shell reveal">
      <div class="card">
        <span class="eyebrow">PROYECTO ACADÉMICO</span>
        <h1>Nosotras</h1>
        <div class="team-grid">
          <article class="person">
            <div class="avatar">Y</div>
            <h2>Yojana</h2>
            <p>Responsable del diseño, organización y presentación del sistema académico.</p>
          </article>
          <article class="person">
            <div class="avatar">V</div>
            <h2>Viviana</h2>
            <p>Encargada de la estructura funcional y la implementación del CRUD estudiantil.</p>
          </article>
        </div>

        <div class="objective-box">
          <h3>Objetivo del proyecto</h3>
          <p>
            Desarrollar un sistema web para gestionar estudiantes de la Institución Educativa Alfonso Ugarte,
            permitiendo registrar, consultar, actualizar y eliminar información de forma organizada y visualmente clara.
          </p>
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
      .team-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(220px, 1fr));
        gap: 18px;
      }
      .person {
        background: #fff9fb;
        border: 1px solid #f3dfe9;
        border-radius: 20px;
        padding: 22px;
      }
      .avatar {
        width: 58px;
        height: 58px;
        display: grid;
        place-items: center;
        border-radius: 18px;
        background: linear-gradient(135deg, #f7a8c8, #e85f9a);
        color: white;
        font-weight: 800;
        font-size: 1.5rem;
      }
      h2 { margin: 16px 0 10px; color: #2d2430; }
      p { color: #6a5d63; line-height: 1.7; }
      .objective-box {
        margin-top: 24px;
        background: linear-gradient(135deg, #fff2f8, #fff8fb);
        border: 1px solid #f0dde5;
        border-radius: 20px;
        padding: 22px;
      }
      h3 { margin-top: 0; color: #2d2430; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(16px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 680px) {
        .team-grid { grid-template-columns: 1fr; }
      }
    `
  ]
})
export class NosotrasPageComponent {}
