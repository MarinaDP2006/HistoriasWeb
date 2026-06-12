# HistoriasWeb – Biblioteca de fanfics y originales
Web para consultar e informar sobre mis libros fanfic y originales. Incluye enlaces a Wattpad, fichas de historias y portadas como imágenes. Este proyecto es una **SPA hecha con Angular** pensada como un "hub" de lectura donde los usuarios pueden:

- **Iniciar sesión**: Acceso para lectores registrados que quieran leer las historias.
- **Buscar**: Buscador de historias por título o fandom.
- **Sobre mí**: Información de la autora.
- **Contacto**: Formulario básico de contacto.
- **Fanfic**: Listado filtrado solo de fanfics.
- **Original**: Listado filtrado solo de historias originales.
- **Ediciones**: Sección para mostrar versiones/actualizaciones y reediciones.

Las **portadas** se gestionan como imágenes dentro de `assets/covers/` y se referencian desde el modelo de historia. Los **enlaces de lectura** apuntan a Wattpad (perfil: `https://www.wattpad.com/user/Ninai_06`) y se configuran en el servicio de datos.

## Estructura del proyecto
```text
src/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── footer/
│   │   │   │   ├── footer.component.ts
│   │   │   │   ├── footer.component.html
│   │   │   │   └── footer.component.scss
│   │   │   └── navbar/
│   │   │       ├── navbar.component.ts
│   │   │       ├── navbar.component.html
│   │   │       └── navbar.component.scss
│   │   └── shared/
│   │       ├── book-card/
│   │       │   ├── book-card.component.ts
│   │       │   ├── book-card.component.html
│   │       │   └── book-card.component.scss
│   │       └── search-bar/
│   │           ├── search-bar.component.ts
│   │           ├── search-bar.component.html
│   │           └── search-bar.component.scss
│   ├── pages/
│   │   ├── home/
│   │   ├── login/
│   │   ├── search/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── fanfic/
│   │   ├── original/
│   │   └── editions/
│   │       └── *.component.{ts,html,scss}
│   ├── services/
│   │   ├── stories.service.ts
│   │   └── auth.service.ts
│   ├── models/
│   │   ├── story.model.ts
│   │   └── user.model.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── interceptors/
│   │   └── auth.interceptor.ts
│   ├── pipes/
│   │   └── truncate.pipe.ts
│   └── directives/
│       └── external-link.directive.ts
├── assets/
│   └── covers/
│       
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

## PARA CONTINUAR: 
https://chat.deepseek.com/a/chat/s/d80b2d0d-7d52-44ef-a38c-a8540726f98a
