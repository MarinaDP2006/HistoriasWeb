<<<<<<< HEAD
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesService } from '../../services/stories.services';
import { BookCardComponent } from '../../components/shared/book-card/book-card';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar';
import { Story } from '../../models/story.model';
=======
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import type { Story } from '../../models/story.model';
import { StoriesService } from '../../services/stories.services';
import { BookCard } from '../../components/shared/book-card/book-card';
import { SearchBar } from '../../components/shared/search-bar/search-bar';
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4

@Component({
  selector: 'app-original',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, BookCardComponent, SearchBarComponent],
=======
  imports: [CommonModule, RouterModule, BookCard, SearchBar],
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
  templateUrl: './original.html',
  styleUrls: ['./original.scss']
})
export class OriginalPage implements OnInit {
<<<<<<< HEAD
  private storiesService = inject(StoriesService);
  allStories = signal<Story[]>([]);
  filteredStories = signal<Story[]>([]);

  ngOnInit() {
    this.allStories.set(this.storiesService.getStoriesByCategory('original'));
    this.filteredStories.set(this.allStories());
  }

  onSearch(term: string) {
    const q = term.toLowerCase().trim();
    if (!q) {
      this.filteredStories.set(this.allStories());
      return;
    }
    const filtered = this.allStories().filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.author.toLowerCase().includes(q)
    );
    this.filteredStories.set(filtered);
=======
  readonly isLoading = signal<boolean>(true);
  readonly stories = signal<Story[]>([]);
  readonly query = signal<string>('');

  readonly filtered = computed(() => {
    const q = this.query().trim().toLowerCase();
    return this.stories().filter(s => {
      if (s.type !== 'original') return false;
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
      const result = this.storiesService.getAllStories?.();
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
          const data = await (result as Promise<Story[]>);
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
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
  }
}
