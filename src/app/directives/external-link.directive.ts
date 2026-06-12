import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appExternalLink]'
})
export class ExternalLinkDirective {
  @Input() href: string = '';

  @HostListener('click', ['$event'])
  onClick(event: Event): void {
    if (this.href && !this.href.startsWith('http')) {
      event.preventDefault();
      window.open('https://' + this.href, '_blank');
    }
  }
}
