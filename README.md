# 📚 HistoriasWeb  
### Biblioteca personal de fanfics y novelas originales

HistoriasWeb es una aplicación web desarrollada en **Angular**, creada como un portal personal donde los lectores pueden:

- Consultar mis **fanfics** y **novelas originales**  
- Acceder a las historias directamente en **Wattpad**  
- Ver portadas, descripciones, etiquetas y fandoms  
- Buscar historias por título, fandom o tags  
- Iniciar sesión para acceder a contenido protegido  
- Conocer más sobre mí y contactar conmigo  

Mi perfil de Wattpad:  
👉 **https://www.wattpad.com/user/Ninai_06**

---

## 🚀 Tecnologías utilizadas

- Angular 17+
- TypeScript
- SCSS
- HTML5
- RxJS
- Angular Router
- LocalStorage (para login simulado)

---

## 📁 Estructura del proyecto

```text
src/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar/
│   │   │   └── footer/
│   │   └── shared/
│   │       ├── book-card/
│   │       └── search-bar/
│   ├── pages/
│   │   ├── home/
│   │   ├── login/
│   │   ├── search/
│   │   ├── about/
│   │   ├── contact/
│   │   ├── fanfic/
│   │   ├── original/
│   │   └── editions/
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
│       ├── fanfic-1.jpg
│       ├── fanfic-2.jpg
│       ├── original-1.jpg
│       └── ...
└── environments/
    ├── environment.ts
    └── environment.prod.ts
```

## Generar
Generar carpeta src/app completa  
(components, pages, services, models, guards, pipes, directives, interceptors)
Generar carpeta src/app/components completa  
(layout + shared + ui si quieres añadirla)
Generar carpeta src/app/pages completa  
(home, login, search, about, contact, fanfic, original, editions)
Generar carpeta src/app/services completa
Generar carpeta src/app/models completa
Generar carpeta src/app/guards completa
Generar carpeta src/app/interceptors completa
Generar carpeta src/app/pipes completa
Generar carpeta src/app/directives completa
Generar carpeta src/environments completa
Generar carpeta assets con portadas y estructura
Generar README final completo para GitHub
