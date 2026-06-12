import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-original-page',
  template: `
    <div class="original-page">
      <h1>Historias Originales</h1>
      <app-search-bar (search)="onSearch($event)"></app-search-bar>
      <div class="books-grid">
        <app-book-card *ngFor="let story of filteredStories" [story]="story"></app-book-card>
      </div>
    </div>
  `,
  styleUrls: ['./original-page.component.scss']
})
export class OriginalPageComponent implements OnInit {
  originals: Story[] = [];
  filteredStories: Story[] = [];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.originals = this.storiesService.getStoriesByType('original');
    this.filteredStories = this.originals;
  }

  onSearch(term: string): void {
    if (!term.trim()) {
      this.filteredStories = this.originals;
      return;
    }
    this.filteredStories = this.storiesService.searchStories(term).filter(s => s.type === 'original');
  }
}
