# Guía de skills para revisar el portfolio

Qué skill usar, cuándo y cómo pedirla. Se escriben en el chat de Claude Code con `/nombre` o en lenguaje natural ("usá impeccable para...").

> Disponibilidad: las skills se versionan en `.claude/skills`, igual en `main` y en `develop`. `emil-design-eng` está instalada. `impeccable` no lo está; hasta que se instale, `frontend-design` y `accessibility` cubren la crítica y la auditoría. El orquestador `portfolio-workflow` decide qué skill usar en cada cambio.

## Orden recomendado

| Paso | Skill | Para qué | Cuándo |
|---|---|---|---|
| 1 | `impeccable` (critique) | Identidad y dirección de arte | Ahora, antes de seguir diseñando |
| 2 | `copywriting` | Que el texto venda quién sos | Cuando la identidad esté definida |
| 3 | `impeccable` (audit) | Revisión técnica de front | Con las pantallas armadas |
| 4 | `cro` | Que un reclutador te entienda y te contacte | Con contenido y diseño estables |
| 5 | `emil-design-eng` | Animaciones y microinteracciones | En la etapa de pulido |
| 6 | `seo` | Que te encuentren en buscadores | Antes de publicar |

---

## 1. `impeccable`: critique de identidad

**Problema que resuelve:** que todas las vistas respondan a la misma identidad que Inicio.

**Qué revisa:** concepto central, coherencia entre secciones, jerarquía, tipografía, color y ritmo.

**Cómo pedirla:**

```
/impeccable critique del sitio completo. Inicio es la referencia del estilo
Modern Retro RPG descrito en DESIGN.md. Señalá qué vistas o componentes se
apartan de él. No toques código todavía.
```

**Resultado esperado:** qué elementos suman, cuáles se apartan de la identidad y cómo alinearlos.

## 2. `copywriting`: textos y mensaje

**Problema que resuelve:** el tono del texto y el del diseño no coinciden, o el tema visual tapa el perfil profesional.

**Qué revisa:** titular del inicio, propuesta de valor, descripción de proyectos, llamados a la acción y textos de ES y EN (`src/data/idiomas`).

**Cómo pedirla:**

```
/copywriting revisá los textos de src/data/idiomas. Soy Backend Developer
PHP/Java. Quiero que el tono acompañe la estética de juego sin perder lo
profesional. No inventes datos ni nombres la empresa actual.
```

## 3. `impeccable`: audit técnico

**Qué revisa:** accesibilidad (contraste, foco, lectores de pantalla), responsive, estados vacíos y de error, rendimiento visual y consistencia de tokens.

**Cómo pedirla:**

```
/impeccable audit de accesibilidad y responsive en modo día y noche.
Respetá los tokens y la escala tipográfica de DESIGN.md.
```

Variantes útiles de la misma skill:
- `polish`: retoques finales de detalle.
- `simplify`: cuando una pantalla se siente recargada.
- `harden`: estados borde, textos largos y traducciones que rompen el layout.

## 4. `cro`: conversión

**Pregunta que responde:** ¿un reclutador entiende en 5 segundos quién sos y cómo contactarte?

**Cómo pedirla:**

```
/cro revisá el portfolio pensando en un reclutador técnico. El objetivo es
que descargue el CV o me contacte.
```

## 5. `emil-design-eng`: interacción

**Qué revisa:** transiciones, hover, feedback al hacer clic y timing. Sirve para que el sitio se sienta como un juego al usarlo, además de al verlo.

**Cómo pedirla:**

```
/emil-design-eng revisá las interacciones. Quiero sensación de menú de RPG
de 16 bits, con animaciones cortas y sin suavizados que choquen con el pixel art.
```

## 6. `seo`: visibilidad

**Qué revisa:** meta tags, títulos por página, Open Graph para compartir en LinkedIn, `hreflang` para ES/EN, sitemap y datos estructurados.

**Cómo pedirla:**

```
/seo revisá meta tags, Open Graph y hreflang para las versiones ES y EN.
```

---

## Reglas que toda skill debe respetar

- No dejar comentarios en el código.
- Componentes tontos en `src/components` y datos conectados solo en `src/pages`.
- Seguir `DESIGN.md` (Modern Retro RPG): Onest para texto e interfaz, Jersey 25 solo para la marca y los acentos pixel, y colores desde los tokens `--color-*`, verificados en día y noche.
- Sprites en `public/sprites`, a escala entera; los iconos monocromos como máscaras con `IconoPixel`.
- No inventar proyectos, experiencia ni estadísticas.
- No nombrar ni hacer identificable la empresa actual.
- Títulos profesionales, sin nombres medievalizados.
