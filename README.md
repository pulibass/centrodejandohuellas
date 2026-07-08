# Dejando Huellas — Landing Page

Landing page para un centro interdisciplinario de rehabilitación, construida con React + Vite + TailwindCSS + Framer Motion + React Icons + React Router.

## Requisitos

- Node.js 18 o superior

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
npm run preview
```

## Estructura

```
src/
  components/
    layout/   -> Header, Footer, WhatsappButton
    ui/       -> Button, Logo, Container, SectionHeading, OrganicDivider
  pages/      -> Home, NotFound (React Router ya configurado)
  sections/   -> Hero, About, Professionals, Benefits, Process, Blog, Testimonials, Contact
  hooks/      -> useScrollPosition
  utils/      -> constants.js (contenido: nav, profesionales, beneficios, blog, testimonios, contacto)
  styles/     -> reservado para estilos adicionales
```

## Personalización rápida

- **Colores y tipografías**: `tailwind.config.js` (paleta `brand.*`, fuentes `font-display` / `font-body`).
- **Textos y datos**: `src/utils/constants.js` — navegación, profesionales, beneficios, timeline, blog, testimonios y datos de contacto (incluye número de WhatsApp y embed de Google Maps).
- **Imágenes**: actualmente se usan placeholders de Unsplash; reemplazá las URLs en `Hero.jsx`, `About.jsx` y `Blog.jsx`, o directamente en `constants.js` para el blog.
- **Blog / CMS**: `BLOG_POSTS` en `constants.js` está listo para reemplazarse por una consulta a WordPress Headless u otro CMS.
- **Formulario de contacto**: `Contact.jsx` tiene el `handleSubmit` preparado para conectarse a un backend o servicio de email.
- **Mapa**: reemplazá `mapEmbedSrc` en `constants.js` por el embed real de Google Maps de la dirección definitiva.

## Notas de accesibilidad y SEO

- Etiquetas semánticas (`header`, `main`, `section`, `footer`, `nav`).
- Alt descriptivo en todas las imágenes.
- Foco visible en elementos interactivos y soporte para `prefers-reduced-motion`.
- Meta tags, Open Graph, Twitter Card y favicon configurados en `index.html`.
