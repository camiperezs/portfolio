---
name: portfolio-workflow
description: Orquestador para cualquier cambio en el portfolio de Camila (HTML, CSS, JS, textos, imágenes, secciones, proyectos, diseño, SEO, accesibilidad, rendimiento o migración a React). Úsala SIEMPRE antes de modificar index.html, style.css, script.js, formulario.js, img/ o el contenido del sitio, y también cuando pidan "mejorar el portfolio", "agregar un proyecto", "cambiar el diseño", "revisar el sitio" o "auditar". Clasifica el cambio y decide qué skills especializadas cargar ANTES de implementar (planificación y diseño) y DESPUÉS (auditoría y verificación).
---

# Flujo de trabajo del portfolio

Este skill no implementa nada por sí mismo: decide **qué skills usar, en qué orden y en qué momento** según el tipo de cambio. Las skills especializadas están en `.claude/skills/` y se cargan con la herramienta Skill.

## Contexto del proyecto

- Sitio estático de una sola página: `index.html`, `style.css`, `script.js` (menú), `formulario.js`, imágenes en `img/`, certificado en `certificados/`.
- Stack actual: **HTML/CSS/JS vanilla**, sin build ni dependencias (Font Awesome por CDN). Deploy en Netlify.
- Idioma del sitio: español (`lang="es"`).
- Público objetivo: reclutadores y empresas que contratan perfiles junior Full Stack, y posibles clientes freelance.
- Objetivo de conversión: que la persona visite los proyectos y **contacte** (LinkedIn, email, GitHub).
- Contexto de marketing: `.claude/product-marketing.md` (las skills de marketing lo leen automáticamente).

## Paso 1: clasificar el cambio

Antes de tocar código, identificá a qué categorías pertenece el pedido. Puede ser más de una.

| Categoría | Señales |
|---|---|
| **A. Contenido / textos** | "Sobre mí", descripciones de proyectos, títulos, CTAs, bio |
| **B. Diseño visual / UI** | colores, tipografía, layout, animaciones, nueva sección, rediseño |
| **C. Maquetación / estructura HTML-CSS** | responsive, grid/flex, semántica, reorganizar secciones, componentes |
| **D. Interactividad / JS** | menú, formulario, scroll, filtros, comportamiento |
| **E. Imágenes y recursos** | agregar/cambiar imágenes, fuentes, íconos, CDN |
| **F. SEO / visibilidad** | meta tags, Open Graph, compartir en LinkedIn, Google |
| **G. Nuevo proyecto en la galería** | agregar una tarjeta de proyecto |
| **H. Migración o código React** | componentes, JSX, Vite/Next, refactor a React |
| **I. Auditoría general** | "revisá el sitio", "qué mejorarías", "está listo para mandar a empresas" |

Los cambios triviales (un typo, un color puntual, un link roto) no necesitan el flujo completo: implementá y pasá solo la verificación mínima del Paso 4.

## Paso 2: skills ANTES de implementar

Cargalas para planificar y tomar decisiones; no generes auditorías largas en esta fase, extraé solo lo que guía la implementación.

| Categoría | Skills previas | Para qué |
|---|---|---|
| A | `copywriting` (texto nuevo) o `copy-editing` (pulir texto existente); `marketing-psychology` si se busca persuadir (prueba social, claridad de propuesta) | Definir el mensaje antes de escribirlo en el HTML |
| B | `frontend-design` | Dirección estética coherente, evitar look genérico |
| C | `frontend-design` (si afecta lo visual); `accessibility` para la semántica | Elegir estructura semántica correcta desde el inicio |
| D | `accessibility` (teclado, foco, ARIA); `best-practices` | Evitar `div onclick`, manejar foco y estados |
| E | `performance` | Formato (WebP/AVIF), tamaños, `loading="lazy"`, `width/height` |
| F | `seo`; `schema` si hay datos estructurados | Qué meta tags y JSON-LD (`Person`, `WebSite`) corresponden |
| G | `copywriting` (título + descripción orientada a resultado y tecnologías); `performance` (imagen) | Tarjeta consistente con las existentes |
| H | `vercel-react-best-practices`; `vercel-composition-patterns` | Estructura de componentes y patrones antes de escribir JSX |
| I | No aplica: ir directo al Paso 4 en modo auditoría completa | |

## Paso 3: implementar

- Respetá las convenciones existentes (nombres de clases en español, estructura de secciones `#inicio`, `#sobremi`, `#portfolio`, `#contacto`) salvo que el cambio sea justamente reestructurar.
- Mantené el sitio sin build step mientras siga siendo vanilla.
- No inventes datos de Camila (experiencia, métricas, clientes). Si el copy necesita un dato que no existe, marcalo como `[COMPLETAR: ...]` y preguntá.

## Paso 4: skills DESPUÉS de implementar (verificación)

Siempre, para cualquier cambio en HTML/CSS/JS:
- `web-design-guidelines` sobre los archivos tocados (reporte `archivo:línea`).

Según categoría:

| Categoría | Skills posteriores |
|---|---|
| A, G | `copy-editing` (repaso final, eliminar muletillas de IA) |
| B, C | `accessibility` (contraste, jerarquía de headings, foco visible); `webapp-testing` para capturas responsive (mobile 375px, desktop 1280px) |
| D | `webapp-testing` (probar el menú/formulario de verdad en navegador); `accessibility` (navegación con teclado) |
| E | `core-web-vitals` (LCP de la imagen hero, CLS por imágenes sin dimensiones) |
| F | `seo` (verificar); `schema` (validar JSON-LD) |
| H | `vercel-react-best-practices` en modo revisión; `webapp-testing` |
| I | Auditoría completa en este orden: `accessibility`, `performance` + `core-web-vitals`, `seo`, `best-practices`, `web-design-guidelines`, `cro` (¿se entiende quién es y cómo contactarla?), `copy-editing` |

`cro` también aplica después de cambios en el hero, la sección de contacto o los CTAs.

## Paso 5: reporte

Cerrá con un resumen breve:
1. Categorías detectadas y skills usadas (antes / después).
2. Qué se cambió.
3. Hallazgos de la verificación: corregidos vs. pendientes (con `archivo:línea`).
4. Cualquier `[COMPLETAR]` que necesite input de Camila.

## Deuda conocida (revisar en la primera auditoría)

- Imagen hero y varias imágenes de proyectos con `alt=""`; `rockyedmfest.png` tiene `alt="blogdecafe"` (incorrecto).
- Links de redes solo con ícono, sin `aria-label`; íconos decorativos sin `aria-hidden`.
- Menú hamburguesa en `<div onclick>` en lugar de `<button>`.
- `<title>Portfolio</title>` genérico; faltan meta description, Open Graph y favicon.
- Formulario de contacto comentado; `formulario.js` se carga igual.
- Botón "Descargar CV" comentado con un path local `file:///`.
- La tarjeta "Portfolio" enlaza a `index.html` con `target="_blank"` (abre el mismo sitio en otra pestaña).
- Datos personales (fecha de nacimiento, teléfono) expuestos en el HTML: evaluar si conviene mostrarlos.
