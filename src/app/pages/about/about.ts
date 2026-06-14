<<<<<<< HEAD
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
=======
import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoriesService } from '../../services/stories.service';
import type { Story } from '../../models/story.model';
import { BookCardComponent } from '../../components/shared/book-card/book-card.component';
import { ExternalLinkDirective } from '../../directives/external-link.directive';
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4

@Component({
  selector: 'app-about',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutPage {
  teamMembers = [
    { name: 'NinaDP', role: 'Fundadora y desarrolladora.', bio: 'Nina es la fundadora de la aplicación y se encarga del desarrollo de la misma.' },
  ];
=======
  imports: [CommonModule, RouterModule, BookCardComponent, ExternalLinkDirective],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  /** Lista de historias (fanfic + originales) */
  readonly stories = signal<Story[]>([]);

  /** Estado de carga */
  readonly isLoading = signal<boolean>(true);

  constructor(private readonly storiesService: StoriesService) {}

  ngOnInit(): void {
    this.loadStories();
  }

  private loadStories(): void {
    this.isLoading.set(true);
    try {
      const all = this.storiesService.getAllStories();
      // Si getAllStories devuelve Observable/Promise, adapta aquí (ej: subscribe/await)
      this.stories.set(all ?? []);
    } finally {
      this.isLoading.set(false);
    }
  }

  openExternal(url: string): void {
    // Abrir en nueva pestaña de forma segura
    window.open(url, '_blank', 'noopener,noreferrer');
  }
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
}
