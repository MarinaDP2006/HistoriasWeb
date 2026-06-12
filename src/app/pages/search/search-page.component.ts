import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../services/stories.service';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-search-page',
  template: `
    <div class="search-page">
      <app-search-bar (search)="onSearch($event)"></app-search-bar>

      <div class="search-results">
        <p *ngIf="searchTerm" class="results-info">
          Mostrando resultados para: <strong>{{ searchTerm }}</strong>
        </p>
        <div *ngIf="filteredStories.length === 0" class="no-results">
          <p>No se encontraron historias que coincidan con tu búsqueda.</p>
        </div>
        <div class="books-grid">
          <app-book-card *ngFor="let story of filteredStories" [story]="story"></app-book-card>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  allStories: Story[] = [];
  filteredStories: Story[] = [];
  searchTerm: string = '';

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.allStories = this.storiesService.getStories();
    this.filteredStories = this.allStories;
  }

  onSearch(term: string): void {
    this.searchTerm = term;
    if (!term.trim()) {
      this.filteredStories = this.allStories;
      return;
    }
    this.filteredStories = this.storiesService.searchStories(term);
  }
}
