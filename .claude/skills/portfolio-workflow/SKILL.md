---
name: portfolio-workflow
description: Orquestador para cualquier cambio en el portfolio de Camila (React + TypeScript + Vite): componentes, páginas, estilos, textos en ES/EN, imágenes y sprites, diseño, SEO, accesibilidad o rendimiento. Úsala SIEMPRE antes de modificar src/, public/, index.html o los textos de src/data/idiomas, y también cuando pidan "mejorar el portfolio", "agregar un proyecto", "cambiar el diseño", "revisar el sitio" o "auditar". Clasifica el cambio y decide qué skills especializadas cargar ANTES de implementar (planificación y diseño) y DESPUÉS (auditoría y verificación).
---

# Flujo de trabajo del portfolio

Este skill no implementa nada por sí mismo: decide **qué skills usar, en qué orden y en qué momento** según el tipo de cambio. Las skills especializadas están en `.claude/skills/` y se cargan con la herramienta Skill.

## Contexto del proyecto

- SPA en **React 19 + TypeScript + Vite**, con `react-router-dom`. Deploy en Netlify (`netlify.toml`); el formulario de Contacto usa Netlify Forms.
- Rutas: `/` (Inicio), `/sobre-mi`, `/tecnologias`, `/experiencia`, `/proyectos`, `/proyectos/:slug`, `/contacto`. `/trabajo` y `/trabajo/:slug` redirigen a las rutas nuevas.
- Idiomas ES/EN con `IdiomaContext` y los textos de `src/data/idiomas/es.ts` y `en.ts`. Tema día/noche con `TemaContext`.
- Reglas obligatorias: `CLAUDE.md` (sin comentarios en el código, componentes tontos, datos solo desde `src/pages`).
- Sistema de diseño: `DESIGN.md` (Modern Retro RPG, con Inicio como referencia). Producto y posicionamiento: `PRODUCT.md`.
- Contexto de marketing: `.claude/product-marketing.md` (las skills de marketing lo leen automáticamente).
- Plan en curso: `docs/plan-unificacion-estilo.md` (adaptar las vistas internas al estilo de Inicio).

## Paso 1: clasificar el cambio

Antes de tocar código, identificá a qué categorías pertenece el pedido. Puede ser más de una.

| Categoría | Señales |
|---|---|
| **A. Contenido / textos** | Textos de `src/data/idiomas`, perfil, recorrido, áreas de experiencia, fichas de proyectos, CTAs |
| **B. Diseño visual / UI** | Tokens, tipografía, layout, animaciones, nueva vista, rediseño |
| **C. Estructura y estilos** | Responsive, grid/flex, semántica, CSS de componentes |
| **D. Interactividad** | Menús, pestañas, formulario, teclado, estado en páginas |
| **E. Imágenes y recursos** | Capturas en `public/img`, sprites y máscaras en `public/sprites`, fuentes |
| **F. SEO / visibilidad** | Meta tags, Open Graph, `hreflang`, datos estructurados |
| **G. Nuevo proyecto o área de experiencia** | Entrada nueva en `src/data/proyectos.ts` o `src/data/experiencia.ts` y sus textos |
| **H. Componentes React** | Componentes nuevos, refactor, props, contexto, rendimiento de render |
| **I. Auditoría general** | "revisá el sitio", "qué mejorarías", "está listo para mandar a empresas" |

Los cambios triviales (un typo, un token puntual, un link roto) no necesitan el flujo completo: implementá y pasá solo la verificación mínima del Paso 4.

## Paso 2: skills ANTES de implementar

Cargalas para planificar y tomar decisiones; no generes auditorías largas en esta fase, extraé solo lo que guía la implementación.

| Categoría | Skills previas | Para qué |
|---|---|---|
| A | `copywriting` (texto nuevo) o `copy-editing` (pulir texto existente); `marketing-psychology` si se busca persuadir | Definir el mensaje antes de escribirlo en `src/data/idiomas` |
| B | `frontend-design` + `DESIGN.md` | Mantener la dirección Modern Retro RPG y los tokens existentes |
| C | `frontend-design` (si afecta lo visual); `accessibility` para la semántica | Estructura semántica correcta desde el inicio |
| D | `accessibility` (teclado, foco, ARIA); `best-practices` | Roles correctos, manejo de foco y estados |
| E | `performance` | Formato, tamaños, `loading="lazy"`, `width/height`, sprites a escala entera |
| F | `seo`; `schema` si hay datos estructurados | Meta tags y JSON-LD (`Person`, `WebSite`) |
| G | `copywriting` (título y resumen orientados a resultado); `performance` (captura) | Ficha consistente con las existentes |
| H | `react-best-practices`; `composition-patterns` | Variantes explícitas, componentes tontos, sin booleanos de más |
| I | No aplica: ir directo al Paso 4 en modo auditoría completa | |

## Paso 3: implementar

- Respetá `CLAUDE.md`: sin comentarios; `src/components` recibe todo por props; `src/pages` conecta datos y contexto; cada componente importa su CSS.
- Colores solo desde los tokens `--color-*` de `src/styles/global.css`. Verificá día y noche.
- Reutilizá antes de crear: `FondoRadial`, `MenuJuego`, `EnlaceAccion`, `ControlSegmentado`, `IconoPixel`.
- Todo texto visible va en `es.ts` y `en.ts`, nunca escrito en el componente.
- No inventes datos de Camila (experiencia, métricas, clientes) ni nombres la empresa actual. Si el copy necesita un dato que no existe, marcalo como `[COMPLETAR: ...]` y preguntá.
- Verificá con `npm run build`, que también corre el chequeo de tipos.

## Paso 4: skills DESPUÉS de implementar (verificación)

Siempre, para cualquier cambio en `src/` o `index.html`:
- `web-design-guidelines` sobre los archivos tocados (reporte `archivo:línea`).

Según categoría:

| Categoría | Skills posteriores |
|---|---|
| A, G | `copy-editing` (repaso final, eliminar muletillas de IA), en ES y EN |
| B, C | `accessibility` (contraste en día y noche, jerarquía de headings, foco visible); `webapp-testing` para capturas (375px y 1280px, día y noche) |
| D | `webapp-testing` (probar la interacción en el navegador); `accessibility` (teclado) |
| E | `core-web-vitals` (LCP, CLS por imágenes sin dimensiones) |
| F | `seo` (verificar); `schema` (validar JSON-LD) |
| H | `react-best-practices` en modo revisión; `webapp-testing` |
| I | Auditoría completa en este orden: `accessibility`, `performance` + `core-web-vitals`, `seo`, `best-practices`, `web-design-guidelines`, `cro` (¿se entiende quién es y cómo contactarla?), `copy-editing` |

`cro` también aplica después de cambios en Inicio, Contacto o los CTAs.

## Paso 5: reporte

Cerrá con un resumen breve:
1. Categorías detectadas y skills usadas (antes / después).
2. Qué se cambió.
3. Hallazgos de la verificación: corregidos vs. pendientes (con `archivo:línea`).
4. Cualquier `[COMPLETAR]` que necesite input de Camila.
