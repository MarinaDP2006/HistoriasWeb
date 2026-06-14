import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  readonly isLoading = signal(false);
  readonly successMessage = signal<string | null>(null);
  readonly errorMessage = signal<string | null>(null);

  constructor(private readonly fb: FormBuilder) {}

  get name() {
    return this.form.get('name')!;
  }

  get email() {
    return this.form.get('email')!;
  }

  get subject() {
    return this.form.get('subject')!;
  }

  get message() {
    return this.form.get('message')!;
  }

  async onSubmit(): Promise<void> {
    this.successMessage.set(null);
    this.errorMessage.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      name: String(this.name.value),
      email: String(this.email.value),
      subject: String(this.subject.value ?? ''),
      message: String(this.message.value)
    };

    this.isLoading.set(true);

    try {
      // Simulación de envío: reemplaza por llamada real a ContactService/HTTP
      await this.simulateSend(payload);
      this.successMessage.set('Mensaje enviado correctamente. ¡Gracias por escribir!');
      this.form.reset();
    } catch (err: unknown) {
      this.errorMessage.set(this.extractErrorMessage(err) || 'No se pudo enviar el mensaje. Intenta más tarde.');
    } finally {
      this.isLoading.set(false);
    }
  }

  private simulateSend(_payload: { name: string; email: string; subject: string; message: string }): Promise<void> {
    return new Promise((resolve, reject) => {
      // Simula latencia de red
      setTimeout(() => {
        // Simula éxito en 92% de los casos
        if (Math.random() < 0.92) {
          resolve();
        } else {
          reject(new Error('Error simulado del servidor'));
        }
      }, 900);
    });
  }

  private extractErrorMessage(err: unknown): string | null {
    if (!err) return null;
    if (typeof err === 'string') return err;
    if (err instanceof Error) return err.message;
    try {
      const anyErr = err as any;
      if (anyErr?.error?.message) return String(anyErr.error.message);
      if (anyErr?.message) return String(anyErr.message);
    } catch {
      // ignore
    }
    return null;
  }
}
