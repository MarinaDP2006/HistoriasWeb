<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SearchBarComponent } from '../../shared/search-bar/search-bar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, SearchBarComponent],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class NavbarComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  isAuthenticated = this.auth.isAuthenticated;
  currentUser = this.auth.getCurrentUser;

  logout(): void {
    this.auth.logout();
    this.router.navigate(['/']);
  }

  onSearch(term: string): void {
    if (term.trim()) {
      this.router.navigate(['/search'], { queryParams: { q: term } });
    }
  }
}
=======
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {}
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
