<<<<<<< HEAD
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: 'a[appExternalLink]',
  standalone: true
})
export class ExternalLinkDirective implements OnInit {
  @Input() href = '';

  constructor(private el: ElementRef<HTMLAnchorElement>) {}

  ngOnInit() {
    if (this.href) {
      this.el.nativeElement.target = '_blank';
      this.el.nativeElement.rel = 'noopener noreferrer';
      this.el.nativeElement.href = this.href;
    } else if (this.el.nativeElement.getAttribute('href')) {
      this.el.nativeElement.target = '_blank';
      this.el.nativeElement.rel = 'noopener noreferrer';
    }
  }
=======
import { Directive } from '@angular/core';

@Directive({
  selector: '[appExternalLink]',
})
export class ExternalLink {
  constructor() {}
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
}
