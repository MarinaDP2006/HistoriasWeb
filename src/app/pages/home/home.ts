<<<<<<< HEAD
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesService } from '../../services/stories.services';
import { BookCardComponent } from '../../components/shared/book-card/book-card';
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
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, BookCardComponent],
=======
  imports: [CommonModule, RouterModule, BookCard, SearchBar],
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomePage implements OnInit {
<<<<<<< HEAD
  private storiesService = inject(StoriesService);
  recentStories = this.storiesService.getRecentStories();
  popularStories = this.storiesService.getPopularStories();

  ngOnInit() {}
=======
  readonly isLoading = signal<boolean>(true);
  readonly stories = signal<Story[]>([]);
  readonly query = signal<string>('');

  readonly fanfics = computed(() => this.stories().filter(s => s.type === 'fanfic'));
  readonly originals = computed(() => this.stories().filter(s => s.type === 'original'));

  readonly featured = computed(() => {
    const list = [...this.fanfics(), ...this.originals()];
    return list.slice(0, 4);
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

      if (typeof (result as any).subscribe === 'function') {
        (result as any).subscribe({
          next: (data: Story[]) => this.stories.set(Array.isArray(data) ? data : []),
          error: () => this.stories.set([]),
          complete: () => this.isLoading.set(false)
        });
        return;
      }

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
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
}
