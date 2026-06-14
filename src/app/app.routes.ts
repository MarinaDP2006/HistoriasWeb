<<<<<<< HEAD
import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.HomePage) },
  { path: 'login', loadComponent: () => import('./pages/login/login').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('./pages/register/register').then(m => m.RegisterPage) }, // ← Añadir esta
  { path: 'search', loadComponent: () => import('./pages/search/search').then(m => m.SearchPage) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.AboutPage) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.ContactPage) },
  { path: 'fanfic', loadComponent: () => import('./pages/fanfic/fanfic').then(m => m.FanficPage) },
  { path: 'original', loadComponent: () => import('./pages/original/original').then(m => m.OriginalPage) },
  { path: 'editions', loadComponent: () => import('./pages/editions/editions').then(m => m.EditionsComponent), canActivate: [authGuard] },
  { path: 'story/:id', loadComponent: () => import('./pages/story-detail/story-detail').then(m => m.StoryDetailPage) },
  { path: '**', redirectTo: '' }
];
=======
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home')
      .then(m => m.Home)
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login')
      .then(m => m.Login)
  },

  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search')
      .then(m => m.Search)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about')
      .then(m => m.About)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact')
      .then(m => m.Contact)
  },

  {
    path: 'fanfic',
    loadComponent: () =>
      import('./pages/fanfic/fanfic')
      .then(m => m.Fanfic)
  },

  {
    path: 'original',
    loadComponent: () =>
      import('./pages/original/original')
      .then(m => m.Original)
  },

  {
    path: 'editions',
    loadComponent: () =>
      import('./pages/editions/editions')
      .then(m => m.Editions)
  }

];
>>>>>>> 948c241bd2a2fb300a5656d5025e1ae7974454d4
