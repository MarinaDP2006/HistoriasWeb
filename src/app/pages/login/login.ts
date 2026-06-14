import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import type { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  readonly isLoading = signal(false);
  readonly authError = signal<string | null>(null);

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  get email() {
    return this.form.get('email')!;
  }

  get password() {
    return this.form.get('password')!;
  }

  async onSubmit(): Promise<void> {
    this.authError.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const emailValue = this.email.value as string;
    const passwordValue = this.password.value as string;
    const remember = !!this.form.get('remember')?.value;

    this.isLoading.set(true);

    try {
      // AuthService.login should return a Promise<User> or Observable converted to Promise
      const user = await this.authService.login({ email: emailValue, password: passwordValue, remember });
      // Optional: you can use signals in authService to set current user
      // Navigate to home or intended route
      await this.router.navigate(['/']);
    } catch (err: unknown) {
      const message = this.extractErrorMessage(err);
      this.authError.set(message);
    } finally {
      this.isLoading.set(false);
    }
  }

  private extractErrorMessage(err: unknown): string {
    if (!err) return 'Error desconocido';
    if (typeof err === 'string') return err;
    if (err instanceof Error) return err.message;
    // If backend returns structured error
    try {
      const anyErr = err as any;
      if (anyErr?.error?.message) return String(anyErr.error.message);
      if (anyErr?.message) return String(anyErr.message);
    } catch {
      // ignore
    }
    return 'No se pudo iniciar sesión. Revisa tus credenciales e inténtalo de nuevo.';
  }
}
