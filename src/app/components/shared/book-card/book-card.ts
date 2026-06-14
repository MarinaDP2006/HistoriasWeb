<<<<<<< HEAD
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Story } from '../../../models/story.model';
import { TruncatePipe } from '../../../pipes/truncate-pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [RouterLink, TruncatePipe, CommonModule],
  templateUrl: './book-card.html',
  styleUrls: ['./book-card.scss']
})
export class BookCardComponent {
  @Input({ required: true }) story!: Story;
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {}
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
