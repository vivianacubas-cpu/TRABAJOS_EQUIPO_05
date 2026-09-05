import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero-section page-shell">
      <div class="hero-copy reveal">
        <span class="eyebrow">GESTIÓN ACADÉMICA</span>
        <h1>Institución Educativa <span>Alfonso Ugarte</span></h1>
        <p>
          Un sistema moderno para administrar estudiantes, consultar información académica y
          mantener organizada la gestión escolar con rapidez y claridad.
        </p>
        <div class="actions">
          <a routerLink="/dashboard" class="primary-btn">Ingresar al sistema</a>
          <a routerLink="/estudiantes" class="secondary-btn">Ver estudiantes</a>
        </div>
      </div>

      <div class="hero-card reveal delayed">
        <div class="logo-badge">AU</div>
        <strong>Alfonso Ugarte</strong>
        <small>Sistema académico</small>
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
      .hero-section {
        min-height: 74vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 36px;
        padding: 42px 36px;
        border-radius: 32px;
        background: linear-gradient(135deg, #fff0f7 0%, #ffe6f1 100%);
        box-shadow: 0 16px 50px rgba(213, 46, 126, 0.12);
        position: relative;
        overflow: hidden;
      }
      .hero-section::after {
        content: "";
        position: absolute;
        width: 260px;
        height: 260px;
        border-radius: 50%;
        right: 150px;
        top: -90px;
        background: rgba(255,255,255,0.52);
      }
      .hero-copy, .hero-card { position: relative; z-index: 1; }
      .eyebrow {
        display: inline-block;
        color: #d52e7e;
        font-weight: 800;
        letter-spacing: 0.18em;
        font-size: 0.74rem;
      }
      h1 {
        margin: 18px 0 16px;
        font-size: clamp(2.2rem, 4vw, 4.2rem);
        line-height: 1.08;
        color: #2d2430;
      }
      h1 span { color: #d52e7e; display: block; }
      .hero-copy p {
        max-width: 640px;
        font-size: 1.03rem;
        line-height: 1.8;
        color: #5d4d57;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 26px;
      }
      .primary-btn, .secondary-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 22px;
        border-radius: 14px;
        text-decoration: none;
        font-weight: 700;
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }
      .primary-btn {
        background: #d52e7e;
        color: #fff;
        box-shadow: 0 10px 24px rgba(213, 46, 126, 0.2);
      }
      .secondary-btn {
        background: #fff;
        color: #d52e7e;
        border: 1px solid #f0dce6;
      }
      .primary-btn:hover, .secondary-btn:hover {
        transform: translateY(-3px);
      }
      .hero-card {
        width: 210px;
        height: 230px;
        background: rgba(255,255,255,0.7);
        border: 1px solid #f5dfe9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 28px;
        text-align: center;
        box-shadow: 0 18px 40px rgba(117, 40, 75, 0.08);
        animation: floatCard 4s ease-in-out infinite;
      }
      .logo-badge {
        width: 72px;
        height: 72px;
        border-radius: 22px;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, #d52e7e, #f06ead);
        color: white;
        font-weight: 800;
        font-size: 1.6rem;
        margin-bottom: 12px;
      }
      .hero-card strong {
        color: #332b31;
        font-size: 1.1rem;
      }
      .hero-card small {
        color: #8d7a81;
        margin-top: 8px;
      }
      .reveal {
        animation: fadeUp 0.7s ease both;
      }
      .delayed { animation-delay: 0.2s; }
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes floatCard {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-8px); }
      }
      @media (max-width: 840px) {
        .hero-section {
          flex-direction: column;
          text-align: center;
        }
        .actions {
          justify-content: center;
        }
      }
      @media (max-width: 520px) {
        .hero-section { padding: 30px 20px; }
      }
    `
  ]
})
export class InicioPageComponent {}
