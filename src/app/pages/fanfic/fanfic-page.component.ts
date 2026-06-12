import { Component, OnInit } from '@angular/core';
import { StoriesService } from '../../services/stories.service';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-fanfic-page',
  template: `
    <div class="fanfic-page">
      <h1>Fanfics</h1>
      <app-search-bar (search)="onSearch($event)"></app-search-bar>
      <div class="books-grid">
        <app-book-card *ngFor="let story of filteredStories" [story]="story"></app-book-card>
      </div>
    </div>
  `,
  styleUrls: ['./fanfic-page.component.scss']
})
export class FanficPageComponent implements OnInit {
  fanfics: Story[] = [];
  filteredStories: Story[] = [];

  constructor(private storiesService: StoriesService) {}

  ngOnInit(): void {
    this.fanfics = this.storiesService.getStoriesByType('fanfic');
    this.filteredStories = this.fanfics;
  }

  onSearch(term: string): void {
    if (!term.trim()) {
      this.filteredStories = this.fanfics;
      return;
    }
    this.filteredStories = this.storiesService.searchStories(term).filter(s => s.type === 'fanfic');
  }
}
