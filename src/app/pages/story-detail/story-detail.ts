import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StoriesService } from '../../services/stories.services';
import { Story } from '../../models/story.model';

@Component({
  selector: 'app-story-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './story-detail.html',
  styleUrls: ['./story-detail.scss']
})
export class StoryDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private storiesService = inject(StoriesService);

  story = signal<Story | null>(null);
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.storiesService.getStories().find(s => s.id === id);
      if (found) {
        this.story.set(found);
      } else {
        this.error.set(true);
      }
    } else {
      this.error.set(true);
    }
    this.loading.set(false);
  }

  // Construir el enlace externo a Wattpad (opcional)
  getWattpadUrl(): string | null {
    const story = this.story();
    if (!story) return null;
    // Mapeo de IDs a URLs reales de Wattpad (según los enlaces que diste)
    const wattpadUrls: Record<string, string> = {
      '2': 'https://www.wattpad.com/story/370676694-la-luz-del-rey-thranduil',
      '4': 'https://www.wattpad.com/story/375456964-my-present-and-future-jj-maybank',
      '5': 'https://www.wattpad.com/story/411797366-nothing-to-lose-except-you-billy-butcher',
      '7': 'https://www.wattpad.com/story/371346486-dayan-denali',
      '8': 'https://www.wattpad.com/story/365375248-el-gorri%C3%B3n-y-la-mujer-del-mar-jack-sparrow',
      '9': 'https://www.wattpad.com/story/400262254-infinite-game-natki',
      '10': 'https://www.wattpad.com/story/412341030-legendary-lovers-%C3%A9omer',
      '11': 'https://www.wattpad.com/story/412380769-legendary-secret-lovers-%C3%A9omer',
      '3': 'https://www.wattpad.com/story/399885493-entre-paginas-e-historia'
    };
    return wattpadUrls[story.id] || null;
  }
}
