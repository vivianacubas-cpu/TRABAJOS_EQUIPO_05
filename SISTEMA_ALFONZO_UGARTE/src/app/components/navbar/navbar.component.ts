import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav class="topbar">
      <div class="brand" routerLink="/inicio" tabindex="0">
        <div class="logo">AU</div>
        <div class="brand-text">
          <strong>Alfonso Ugarte</strong>
          <small>Sistema académico</small>
        </div>
      </div>

      <div class="menu">
        <a routerLink="/inicio" routerLinkActive="active">Inicio</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        <a routerLink="/estudiantes" routerLinkActive="active">Estudiantes</a>
        <a routerLink="/padres" routerLinkActive="active">Padres</a>
        <a routerLink="/estudiantes/nuevo" routerLinkActive="active">Registrar</a>
        <a routerLink="/padres/nuevo" routerLinkActive="active">Registrar padre</a>
        <a routerLink="/nosotras" routerLinkActive="active">Nosotras</a>
        <a routerLink="/contacto" routerLinkActive="active">Contacto</a>
      </div>
    </nav>
  `,
  styles: [
    `
      .topbar {
        position: sticky;
        top: 0;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        padding: 16px 5%;
        background: rgba(255,255,255,0.82);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid #f0dfe7;
        animation: fadeDown 0.5s ease;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 12px;
        cursor: pointer;
        outline: none;
      }
      .logo {
        width: 42px;
        height: 42px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        background: linear-gradient(135deg, #d52e7e, #f08cc0);
        color: white;
        font-weight: 800;
      }
      .brand-text strong {
        display: block;
        color: #2d2430;
        font-size: 0.96rem;
      }
      .brand-text small {
        color: #8d7c83;
        font-size: 0.65rem;
      }
      .menu {
        display: flex;
        align-items: center;
        gap: 16px;
        flex-wrap: wrap;
      }
      .menu a {
        text-decoration: none;
        color: #655a60;
        font-weight: 600;
        padding: 10px 12px;
        border-radius: 10px;
        transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
      }
      .menu a:hover,
      .menu a.active {
        background: #fff0f7;
        color: #d52e7e;
      }
      @keyframes fadeDown {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @media (max-width: 760px) {
        .topbar {
          flex-direction: column;
          align-items: flex-start;
        }
        .menu {
          width: 100%;
          justify-content: flex-start;
        }
      }
    `
  ]
})
export class NavbarComponent {}
