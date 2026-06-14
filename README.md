# HistoriasWeb 
Es una biblioteca personal de fanfics y novelas originales creada como una SPA con **Angular 20 (Standalone Components)**. La web sirve como centro de lectura para mostrar historias, portadas, información de la autora y enlaces a Wattpad.

Perfil Wattpad de la autora:  
https://www.wattpad.com/user/Ninai_06

## Descripción
HistoriasWeb es una aplicación pensada para mostrar una colección de historias (fanfic y originales) con portadas grandes, tarjetas visuales, descripciones y enlaces externos (Wattpad). La experiencia es **mobile-first**, responsive y con una estética inspirada en bibliotecas y fantasía.

## Tecnologías
- **Angular 20** (Standalone Components, sin NgModules)  
- **TypeScript**  
- **SCSS**  
- **Angular Router** (SPA)  
- **Signals** (cuando aportan valor para estado reactivo)  
- **Vite / Angular CLI**   

## Estructura del proyecto
```txt
src/
└── app/
├── components/
│   ├── layout/
│   │   ├── navbar/
│   │   └── footer/
│   └── shared/
│       ├── book-card/
│       └── search-bar/
│
├── pages/
│   ├── home/
│   ├── login/
│   ├── search/
│   ├── about/
│   ├── contact/
│   ├── fanfic/
│   ├── original/
│   └── editions/
│
├── services/
│   ├── stories.service.ts
│   └── auth.service.ts
│
├── models/
│   ├── story.model.ts
│   └── user.model.ts
│
├── guards/
│   └── auth.guard.ts
│
├── interceptors/
│   └── auth.interceptor.ts
│
├── pipes/
│   └── truncate.pipe.ts
│
├── directives/
│   └── external-link.directive.ts
│
├── app.routes.ts
├── app.config.ts
├── app.ts
└── app.scss
```
Assets de portadas: `src/assets/covers/`.

## Componentes y páginas
Layout: 
- navbar: navegación superior, responsive, menú hamburguesa en móvil.
- footer: créditos, enlaces sociales, enlace a Wattpad.

Shared
- book-card: tarjeta reutilizable para mostrar una historia.
- search-bar: componente de búsqueda reutilizable.

Pages
- home: landing con destacados y secciones por tipo.
- login: formulario de autenticación.
- search: resultados y filtros.
- fanfic: listado de fanfics.
- original:  listado de originales.
- about: sobre la autora.
- contact: formulario de contacto.
- editions: area de actualizaciones (protegida por auth.guard).

Cada componente/página es standalone y tiene sus archivos .ts, .html y .scss.

Servicios
- stories.service.ts: Provee el catálogo de historias.

Métodos recomendados:
- getAllStories(): Story[]
- getStoriesByType(type: 'fanfic'|'original')
- search(term: string)
- getById(id: number)
- auth.service.ts
Maneja login/logout, token y estado del usuario. Recomendado usar signal para currentUser o isAuthenticated.

Métodos:
- login(credentials): Promise<User>
- logout(): void
- isAuthenticated(): boolean
- getToken(): string | null
- Guards, Interceptors, Directives y Pipes
- Guard (auth.guard.ts)
Protege rutas que requieren autenticación. Usa auth.service para validar sesión y redirigir a /login.

Interceptor (auth.interceptor.ts): Añade Authorization header con token a peticiones HTTP. Maneja respuestas 401 para forzar logout o refresco.

Directive (external-link.directive.ts): Añade target="_blank" y rel="noopener noreferrer" a enlaces externos. Uso: <a appExternalLink href="...">Leer</a>

Pipe (truncate.pipe.ts): Trunca textos largos y añade .... Uso: {{ story.description | truncate:150 }}

## Instalacion y ejecucion
```bash
git clone <repo-url>
cd historias-web
npm install
ng serve
# o
npm start
# Abre http://localhost:4200.
ng build --configuration production
```

## Comandos utiles:
```bash
# Crear componente standalone
ng g c app/pages/home --standalone --flat=false

# Crear servicio
ng g s app/services/stories

# Crear guard (functional)
ng g guard app/guards/auth --functional

# Crear interceptor
ng g interceptor app/interceptors/auth

# Crear pipe standalone
ng g pipe app/pipes/truncate --standalone

# Crear directive standalone
ng g directive app/directives/external-link --standalone
