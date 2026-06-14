import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { Story } from '../../models/story.model';
import { StoriesService } from '../../services/stories.services';
import { BookCard } from '../../components/shared/book-card/book-card.ts';
import { SearchBar } from '../../components/shared/search-bar/search-bar.ts';

@Component({
  selector: 'app-fanfic',
  standalone: true,
  imports: [CommonModule, RouterModule, BookCard, SearchBar],
  templateUrl: './fanfic.html',
  styleUrls: ['./fanfic.scss']
})
export class FanficPage implements OnInit {
  readonly isLoading = signal<boolean>(true);
  readonly stories = signal<Story[]>([]);
  readonly query = signal<string>('');

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.stories().filter(s => {
      if (s.type !== 'fanfic') return false;
      if (!q) return true;
      return (
        s.title.toLowerCase().includes(q) ||
        s.fandom.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
      );
    });
  });

  constructor(private readonly storiesService: StoriesService) {}

  ngOnInit(): void {
    this.loadStories();
  }

  private async loadStories(): Promise<void> {
    this.isLoading.set(true);
    try {
      const result = this.storiesService.getStories?.();
      if (!result) {
        this.stories.set([]);
        return;
      }

      // Observable
      if (typeof (result as any).subscribe === 'function') {
        (result as any).subscribe({
          next: (data: Story[]) => this.stories.set(Array.isArray(data) ? data : []),
          error: () => this.stories.set([]),
          complete: () => this.isLoading.set(false)
        });
        return;
      }

      // Promise
      if (typeof (result as any).then === 'function') {
        try {
          const data = await (result as unknown as Promise<Story[]>);
          this.stories.set(Array.isArray(data) ? data : []);
        } catch {
          this.stories.set([]);
        } finally {
          this.isLoading.set(false);
        }
        return;
      }

      // Synchronous array
      const data = result as Story[];
      this.stories.set(Array.isArray(data) ? data : []);
    } catch {
      this.stories.set([]);
    } finally {
      this.isLoading.set(false);
    }
  }

  onSearch(term: string): void {
    this.query.set(term);
  }
}
