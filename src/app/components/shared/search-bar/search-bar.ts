import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoriesService } from '../../services/stories.services';
import { BookCardComponent } from '../../components/shared/book-card/book-card';
import { SearchBarComponent } from '../../components/shared/search-bar/search-bar';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, BookCardComponent, SearchBarComponent, RouterLink],
  templateUrl: './search.html',
  styleUrls: ['./search.scss']
})
export class SearchPage implements OnInit {
  private storiesService = inject(StoriesService);
  private route = inject(ActivatedRoute);

  searchTerm = '';
  selectedFandom = '';
  results = signal<Story[]>([]);
  allStories: Story[] = [];

  // Lista de fandoms con su color
  fandoms = [
    { name: 'El Señor de los Anillos', key: 'El Señor de los Anillos', color: '#8B4513' },
    { name: 'Twilight', key: 'Crepúsculo', color: '#4A0E4E' },
    { name: 'The Boys', key: 'The Boys', color: '#E6242E' },
    { name: 'Outer Banks', key: 'Outer Banks', color: '#1E88E5' },
    { name: 'Piratas del Caribe', key: 'Piratas del Caribe', color: '#C9A03D' }
  ];

  ngOnInit() {
    this.allStories = this.storiesService.getStories();
    this.route.queryParams.subscribe(params => {
      const q = params['q'] || '';
      this.searchTerm = q;
      this.selectedFandom = params['fandom'] || '';
      this.performSearch();
    });
  }

  onSearch(term: string) {
    this.searchTerm = term;
    this.updateUrl();
  }

  selectFandom(fandomKey: string) {
    this.selectedFandom = fandomKey === this.selectedFandom ? '' : fandomKey;
    this.updateUrl();
  }

  private updateUrl() {
    const queryParams: any = {};
    if (this.searchTerm) queryParams.q = this.searchTerm;
    if (this.selectedFandom) queryParams.fandom = this.selectedFandom;
    // No cambiamos la URL real para no recargar la página, pero actualizamos resultados
    this.performSearch();
    // Opcional: actualizar URL sin recargar
    window.history.replaceState({}, '', window.location.pathname + '?' + new URLSearchParams(queryParams).toString());
  }

  private performSearch() {
    let filtered = this.allStories;
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(s =>
        s.title.toLowerCase().includes(term) ||
        s.author.toLowerCase().includes(term) ||
        s.description.toLowerCase().includes(term) ||
        (s.fandom && s.fandom.toLowerCase().includes(term))
      );
    }
    if (this.selectedFandom) {
      filtered = filtered.filter(s => s.fandom === this.selectedFandom);
    }
    this.results.set(filtered);
  }
}
