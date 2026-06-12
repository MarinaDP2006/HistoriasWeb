import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-home-page',
  template: `
    <div class="home-page">
      <section class="hero">
        <h1>Bienvenido a HistoriasWeb</h1>
        <p>Explora mi colección de fanfics e historias originales</p>
        <app-search-bar (search)="onSearch($event)"></app-search-bar>
      </section>

      <section class="featured">
        <h2>Historias destacadas</h2>
        <div class="books-grid">
          <app-book-card *ngFor="let story of filteredStories" [story]="story"></app-book-card>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  stories: Story[] = [];
  filteredStories: Story[] = [];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.stories = this.storiesService.getStories();
    this.filteredStories = this.stories.slice(0, 6); // Muestra las primeras 6
  }

  onSearch(term: string): void {
    if (!term.trim()) {
      this.filteredStories = this.stories.slice(0, 6);
      return;
    }
    this.filteredStories = this.storiesService.searchStories(term).slice(0, 6);
  }
}
