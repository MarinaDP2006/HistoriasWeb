import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  template: `
    <div class="login-page">
      <div class="login-card">
        <h2>Iniciar sesión</h2>
        <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
          <div class="form-group">
            <label for="email">Correo electrónico</label>
            <input id="email" type="email" formControlName="email" placeholder="usuario@ejemplo.com">
          </div>
          <div class="form-group">
            <label for="password">Contraseña</label>
            <input id="password" type="password" formControlName="password" placeholder="********">
          </div>
          <button type="submit" [disabled]="loginForm.invalid">Acceder</button>
          <p class="demo-info">Demo: cualquier email/contraseña funciona</p>
        </form>
      </div>
    </div>
  `,
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
