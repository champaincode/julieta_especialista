<<<<<<< HEAD
# Julieta Rodríguez - Portfolio Landing Page

Landing page profesional en **Astro** con **TailwindCSS** para Julieta Rodríguez, especialista en Marketing Digital & Redes Sociales.

## 🚀 Características

- ✨ Diseño moderno con estética pastel (rosas, lilas, amarillos)
- 📱 Completamente responsive (mobile-first)
- ⚡ Optimizado con Astro para máximo rendimiento
- 🎨 TailwindCSS para estilos personalizados
- 🎯 Enfoque en sector gastronómico y hospitalidad
- 📧 Formulario de contacto funcional (modo demo)
- ♿ Accesible (WCAG 2.1)
- 🔍 SEO optimizado

## 📁 Estructura del Proyecto

```
julienta/
├── public/
│   └── assets/           # Imágenes (hero, proyectos, about)
├── src/
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── FeaturedProjects.astro
│   │   ├── FeatureMiniCard.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── ProjectCard.astro
│   │   ├── ServiceCard.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🛠️ Instalación

### Prerrequisitos

- Node.js 18+
- npm o pnpm

### Pasos

1. **Instalar dependencias:**

```bash
npm install
```

2. **Agregar imágenes placeholder:**

Coloca las siguientes imágenes en `public/assets/`:

- `hero-bg.jpg` - Imagen de fondo del hero (restaurante/mesa)
- `project-1.jpg` - Proyecto destacado 1
- `project-2.jpg` - Proyecto destacado 2
- `project-3.jpg` - Proyecto destacado 3
- `about-image.jpg` - Foto de perfil/profesional

3. **Iniciar servidor de desarrollo:**

```bash
npm run dev
```

La web estará disponible en `http://localhost:4321`

## 📦 Comandos Disponibles

| Comando           | Acción                                            |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Instala dependencias                              |
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Construye el sitio para producción en `./dist/`   |
| `npm run preview` | Previsualiza la build de producción localmente    |

## 🎨 Personalización

### Colores

Los colores están definidos en `tailwind.config.mjs`:

```javascript
colors: {
  'pastel-pink': '#F3A7C9',
  'pastel-pink-light': '#F7B6D5',
  'pastel-purple': '#B88AF2',
  'pastel-purple-light': '#C9A7FF',
  'pastel-yellow': '#F3F58A',
  'bg-light': '#F6F7F9',
  'text-dark': '#151515',
  'bg-dark': '#0E0F12',
}
```

### Tipografías

Se utilizan Google Fonts:

- **Fraunces** - Títulos y headings
- **Inter** - Texto de cuerpo

### Contenido

Edita los archivos `.astro` en `src/components/` y `src/pages/` para actualizar textos, imágenes y datos de proyectos/servicios.

## 📧 Formulario de Contacto

El formulario actualmente funciona en **modo demo** (muestra mensaje de éxito sin enviar datos).

Para integrarlo con un backend real, edita `src/components/Contact.astro` y reemplaza el comentario:

```javascript
// TODO: Integrate with Formspree/Netlify Forms/Zapier
```

### Opciones de integración:

1. **Formspree**: Agrega `action="https://formspree.io/f/YOUR_ID"` al form
2. **Netlify Forms**: Agrega atributo `netlify` al form
3. **API personalizada**: Implementa fetch a tu endpoint

## 🚀 Despliegue

### Netlify

```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

### Vercel

```bash
npm run build
# Conecta el repo con Vercel
```

### Otros

El proyecto genera archivos estáticos en `dist/` que pueden desplegarse en cualquier hosting.

## 📝 Licencia

© 2026 Julieta Rodríguez. Todos los derechos reservados.

## 🤝 Soporte

Para consultas: hola@julietarodriguez.com
=======
# julieta_especialista
>>>>>>> 2bbe384e67a903627c2b2faedbc09abbf358a63b
