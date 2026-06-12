import { Component, Input } from '@angular/core';
import { Story } from '../../../models/story.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() story!: Story;
}
