import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { BookCardComponent } from './components/shared/book-card/book-card.component';
import { SearchBarComponent } from './components/shared/search-bar/search-bar.component';
import { HomePageComponent } from './pages/home/home-page.component';
import { LoginPageComponent } from './pages/login/login-page.component';
import { SearchPageComponent } from './pages/search/search-page.component';
import { AboutPageComponent } from './pages/about/about-page.component';
import { ContactPageComponent } from './pages/contact/contact-page.component';
import { FanficPageComponent } from './pages/fanfic/fanfic-page.component';
import { OriginalPageComponent } from './pages/original/original-page.component';
import { EditionsPageComponent } from './pages/editions/editions-page.component';

import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ExternalLinkDirective } from './directives/external-link.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BookCardComponent,
    SearchBarComponent,
    HomePageComponent,
    LoginPageComponent,
    SearchPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    FanficPageComponent,
    OriginalPageComponent,
    EditionsPageComponent,
    TruncatePipe,
    ExternalLinkDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
