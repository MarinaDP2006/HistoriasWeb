import { Injectable, signal } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private currentUser = signal<User | null>(null);

  constructor() {
    // Cargar usuario de localStorage si existe
    const saved = localStorage.getItem('user');
    if (saved) {
      this.currentUser.set(JSON.parse(saved));
    }
  }

  isAuthenticated(): boolean {
    return this.currentUser() !== null;
  }

  // Registro: guarda en localStorage
  async register(name: string, email: string, password: string): Promise<User> {
    // Simular espera de red
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Verificar si el email ya está registrado
        const users = this.getUsersFromStorage();
        if (users.some(u => u.email === email)) {
          reject(new Error('El correo electrónico ya está registrado.'));
          return;
        }
        const newUser: User = {
          email,
          name,
          role: 'reader',
          password // En producción NUNCA guardar contraseña en texto plano
        };
        users.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(users));
        resolve(newUser);
      }, 500);
    });
  }

  async login(credentials: { email: string; password: string; remember: boolean }): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = this.getUsersFromStorage();
        const user = users.find(u => u.email === credentials.email && u.password === credentials.password);
        if (user) {
          const loggedUser = { ...user };
          delete loggedUser.password; // No guardar contraseña en sesión
          this.currentUser.set(loggedUser);
          if (credentials.remember) {
            localStorage.setItem('user', JSON.stringify(loggedUser));
          }
          resolve(loggedUser);
        } else {
          reject(new Error('Correo o contraseña incorrectos'));
        }
      }, 500);
    });
  }

  logout(): void {
    this.currentUser.set(null);
    localStorage.removeItem('user');
  }

  getCurrentUser() {
    return this.currentUser();
  }

  private getUsersFromStorage(): User[] {
    const stored = localStorage.getItem('registeredUsers');
    return stored ? JSON.parse(stored) : [
    ];
  }
}
