import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { SearchPageComponent } from './pages/search/search-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { FanficPageComponent } from './pages/fanfic/fanfic-page.component';
import { OriginalPageComponent } from './pages/original/original-page.component';
import { EditionsPageComponent } from './pages/editions/editions-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'buscar', component: SearchPageComponent, canActivate: [AuthGuard] },
  { path: 'sobre-mi', component: AboutPageComponent },
  { path: 'contacto', component: ContactPageComponent },
  { path: 'fanfic', component: FanficPageComponent, canActivate: [AuthGuard] },
  { path: 'original', component: OriginalPageComponent, canActivate: [AuthGuard] },
  { path: 'ediciones', component: EditionsPageComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
