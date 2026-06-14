<<<<<<< HEAD
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesService } from '../../services/stories.services';
import { BookCardComponent } from '../../components/shared/book-card/book-card';
import { AuthService } from '../../services/auth.service';
import { Story } from '../../models/story.model';
=======
import { AuthServices } from './../../services/auth.services';
import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import type { Story } from '../../models/story.model';
import { StoriesService } from '../../services/stories.services.ts';
import { authGuard } from '../../guards/auth-guard';

type EditionType = 'cover' | 'content' | 'both';
interface Edition {
  id: string;
  storyId: number;
  date: string; // ISO
  type: EditionType;
  notes: string;
  coverFileName?: string;
  coverPreview?: string; // data URL for preview
}
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4

@Component({
  selector: 'app-editions',
  standalone: true,
<<<<<<< HEAD
  imports: [CommonModule, BookCardComponent],
  templateUrl: './editions.html',
  styleUrls: ['./editions.scss']
})
export class EditionsComponent implements OnInit {
  private storiesService = inject(StoriesService);
  private auth = inject(AuthService);

  eomerStories = signal<Story[]>([]);

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      // Filtrar las dos historias de Éomer por sus IDs
      const all = this.storiesService.getStories();
  const eomer = all.filter(s => s.id === '10' || s.id === '11');
      this.eomerStories.set(eomer);
    }
  }
=======
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './editions.html',
  styleUrls: ['./editions.scss']
})

export class EditionsComponent {
Number(arg0: any): number|null {
throw new Error('Method not implemented.');
}

auth() {
throw new Error('Method not implemented.');
}
  private readonly STORAGE_KEY = 'histories_editions_v1';

  readonly isLoading = signal<boolean>(true);
  readonly editions = signal<Edition[]>([]);
  readonly stories = signal<Story[]>([]);
  readonly selectedStoryId = signal<number | null>(null);
  readonly previewCover = signal<string | null>(null);
  readonly authGuard = signal<{ isAuthenticated: boolean } | null>(null);

  readonly groupedByStory = computed(() => {
    const map = new Map<number, Edition[]>();
    for (const e of this.editions()) {
      const arr = map.get(e.storyId) ?? [];
      arr.push(e);
      map.set(e.storyId, arr);
    }
    return map;
  });

  readonly form = this.fb.group({
    storyId: [null as number | null, [Validators.required]],
    type: ['cover' as EditionType, [Validators.required]],
    notes: ['', [Validators.required, Validators.minLength(6)]],
    cover: [null as File | null]
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly storiesService: StoriesService,
    private readonly authServices: AuthServices
  ) {
    this.init();
  }

  private init(): void {
    this.isLoading.set(true);
    try {
      // Cargar historias desde StoriesService (sincrónico o adaptado)
      const all = this.storiesService.getStories();
      this.stories.set(all ?? []);
      // Cargar ediciones desde localStorage
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) {
        try {
          const parsed = JSON.parse(raw) as Edition[];
          this.editions.set(parsed);
        } catch {
          this.editions.set([]);
        }
      } else {
        this.editions.set([]);
      }

      // Estado de autenticación (AuthService debe exponer isAuthenticated())
      const isAuth = typeof this.authServices.isAuthenticated === 'function'
        ? this.authServices.isAuthenticated()
        : Boolean((this.authServices as any).currentUser);
      this.authGuard.set({ isAuthenticated: isAuth });
    } finally {
      this.isLoading.set(false);
    }
  }

  // Helpers para template
  storyById(id: number): Story | undefined {
    return this.stories().find(s => s.id === id);
  }

  // Seleccionar historia para filtrar
  selectStory(id: number | null): void {
    this.selectedStoryId.set(id);
  }

  // Manejar selección de archivo y generar preview
  async onCoverSelected(event: Event): Promise<void> {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files[0] ? input.files[0] : null;
    this.form.patchValue({ cover: file });
    this.previewCover.set(null);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.previewCover.set(String(reader.result));
      };
      reader.readAsDataURL(file);
    }
  }

  // Crear nueva edición
  addEdition(): void {
    if (!this.authGuard()?.isAuthenticated) {
      // No permitir crear si no está autenticado
      alert('Debes iniciar sesión para crear una edición.');
      return;
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const storyId = Number(this.form.get('storyId')!.value) as number;
    const type = this.form.get('type')!.value as EditionType;
    const notes = String(this.form.get('notes')!.value ?? '');
    const coverFile = this.form.get('cover')!.value as File | null;

    // Si la edición incluye portada y no hay archivo, validar
    if ((type === 'cover' || type === 'both') && !coverFile) {
      alert('Selecciona una imagen de portada para la edición.');
      return;
    }

    const newEdition: Edition = {
      id: cryptoRandomId(),
      storyId,
      date: new Date().toISOString(),
      type,
      notes: notes.trim(),
      coverFileName: coverFile?.name
    };

    if (coverFile) {
      // Generar preview y guardarlo en base64 para persistencia local (en producción, subir a servidor)
      const reader = new FileReader();
      reader.onload = () => {
        newEdition.coverPreview = String(reader.result);
        this.pushEdition(newEdition);
      };
      reader.readAsDataURL(coverFile);
    } else {
      this.pushEdition(newEdition);
    }

    // Reset form y preview
    this.form.reset({ type: 'cover', storyId: null, notes: '', cover: null });
    this.previewCover.set(null);
  }

  private pushEdition(e: Edition): void {
    const current = [...this.editions()];
    current.unshift(e); // añadir al inicio
    this.editions.set(current);
    this.saveToStorage();
  }

  private saveToStorage(): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.editions()));
    } catch {
      console.warn('No se pudo guardar ediciones en localStorage.');
    }
  }

  // Eliminar edición
  removeEdition(id: string): void {
    const ok = confirm('¿Eliminar esta edición? Esta acción no se puede deshacer.');
    if (!ok) return;
    const filtered = this.editions().filter(e => e.id !== id);
    this.editions.set(filtered);
    this.saveToStorage();
  }

  // Filtrado para mostrar en UI
  get visibleEditions(): Edition[] {
    const sel = this.selectedStoryId();
    return sel == null ? this.editions() : this.editions().filter(e => e.storyId === sel);
  }
}

/** Generador simple de id seguro para navegador */
function cryptoRandomId(): string {
  try {
    const arr = new Uint8Array(12);
    crypto.getRandomValues(arr);
    return Array.from(arr).map(b => b.toString(16).padStart(2, '0')).join('');
  } catch {
    return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  }
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
}
