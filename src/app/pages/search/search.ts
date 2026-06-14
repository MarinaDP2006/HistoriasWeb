<<<<<<< HEAD
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoriesService } from '../../services/stories.services';
import { BookCardComponent } from '../../components/shared/book-card/book-card';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar';
import { Story } from '../../models/story.model';
=======
import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import type { Story } from '../../models/story.model';
import { StoriesService } from '../../services/stories.services';
import { BookCard } from '../../components/shared/book-card/book-card';
import { SearchBar } from '../../components/shared/search-bar/search-bar';
import { FormsModule } from '@angular/forms';
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4

@Component({
  selector: 'app-search',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, FormsModule, BookCardComponent, SearchBarComponent],
=======
  imports: [CommonModule, RouterModule, FormsModule, BookCard, SearchBar],
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
  templateUrl: './search.html',
  styleUrls: ['./search.scss']
})
export class SearchPage implements OnInit {
<<<<<<< HEAD
  private storiesService = inject(StoriesService);
  private route = inject(ActivatedRoute);

  searchTerm = '';
  results = signal<Story[]>([]);

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const q = params['q'] || '';
      this.searchTerm = q;
      this.performSearch();
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.performSearch();
  }

  private performSearch() {
    if (!this.searchTerm.trim()) {
      this.results.set([]);
      return;
    }
    this.results.set(this.storiesService.searchStories(this.searchTerm));
=======
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly isLoading = signal<boolean>(true);
  readonly stories = signal<Story[]>([]);
  readonly query = signal<string>('');

  readonly results = computed(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return this.stories();
    return this.stories().filter(s =>
      s.title.toLowerCase().includes(q) ||
      s.fandom.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  constructor(private readonly storiesService: StoriesService) {}

  ngOnInit(): void {
    // Leer query param inicial
    const initial = this.route.snapshot.queryParamMap.get('q') ?? '';
    this.query.set(initial);
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
    // Actualizar query param para permitir compartir la URL
    this.router.navigate([], { queryParams: { q: term || null }, queryParamsHandling: 'merge' });
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
  }
}
