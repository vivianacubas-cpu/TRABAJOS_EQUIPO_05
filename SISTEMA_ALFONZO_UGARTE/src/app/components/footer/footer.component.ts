import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="site-footer">
      <strong>I.E. Alfonso Ugarte</strong>
      <span>Proyecto académico 2026</span>
      <small>Yojana &amp; Viviana</small>
    </footer>
  `,
  styles: [
    `
      :host { display: block; }
      .site-footer {
        padding: 28px 5%;
        text-align: center;
        border-top: 1px solid #f3dfe9;
        background: rgba(255, 255, 255, 0.7);
        color: #86757d;
        font-size: 0.82rem;
        line-height: 1.8;
      }
      .site-footer strong {
        display: block;
        color: #d52e7e;
        font-size: 0.9rem;
        letter-spacing: 0.08em;
      }
      .site-footer span,
      .site-footer small {
        display: block;
      }
      @media (max-width: 768px) {
        .site-footer { padding: 22px 16px; }
      }
    `
  ]
})
export class FooterComponent {}
