import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  template: `
    <div class="about-page">
      <div class="about-card">
        <h1>Sobre mí</h1>
        <div class="author-info">
          <div class="avatar">📖</div>
          <h2>Ninai_06</h2>
          <p>Escritora apasionada por crear mundos a través de las palabras. Especializada en fanfics e historias originales de romance, fantasía y drama.</p>
          <p>Mi viaje como escritora comenzó hace varios años, y desde entonces he tenido el placer de conectar con lectores de todo el mundo a través de Wattpad.</p>
          <div class="social-links">
            <a href="https://www.wattpad.com/user/Ninai_06" target="_blank" rel="noopener noreferrer">📚 Perfil de Wattpad</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {}
