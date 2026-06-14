import { HttpInterceptorFn } from '@angular/common/http';
<<<<<<< HEAD
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const user = authService.getCurrentUser();

  if (user && user.token) { // Si tu modelo User tiene token
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${user.token}`)
    });
    return next(clonedReq);
  }

  // También puedes leer de localStorage si usas token JWT
  const token = localStorage.getItem('auth_token');
  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(clonedReq);
  }

=======

export const authInterceptor: HttpInterceptorFn = (req, next) => {
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
  return next(req);
};
