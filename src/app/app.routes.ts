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
