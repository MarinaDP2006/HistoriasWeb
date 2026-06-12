import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  template: `
    <div class="contact-page">
      <div class="contact-card">
        <h1>Contacto</h1>
        <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="name">Nombre</label>
            <input id="name" type="text" formControlName="name">
          </div>
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input id="email" type="email" formControlName="email">
          </div>
          <div class="form-group">
            <label for="message">Mensaje</label>
            <textarea id="message" rows="5" formControlName="message"></textarea>
          </div>
          <button type="submit" [disabled]="contactForm.invalid">Enviar mensaje</button>
          <p *ngIf="submitted" class="success-message">¡Mensaje enviado con éxito! Te responderé pronto.</p>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contactForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.submitted = true;
      console.log('Mensaje enviado:', this.contactForm.value);
      this.contactForm.reset();
      setTimeout(() => {
        this.submitted = false;
      }, 3000);
    }
  }
}
