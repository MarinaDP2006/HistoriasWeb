<<<<<<< HEAD
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated()) {
    return true;
  }

  // Redirige a login con la URL a la que se intentaba acceder
  return router.parseUrl('/login?returnUrl=' + state.url);
=======
import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
};
