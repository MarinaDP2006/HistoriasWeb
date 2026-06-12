import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false;

  login(credentials: { email: string; password: string }): Observable<boolean> {
    return of(true).pipe(
      delay(500),
      tap(() => {
        this.isAuthenticated = true;
        localStorage.setItem('isLoggedIn', 'true');
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || localStorage.getItem('isLoggedIn') === 'true';
  }
}
