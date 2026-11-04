# Guía de skills para revisar el portfolio

Qué skill usar, cuándo y cómo pedirla. Se escriben en el chat de Claude Code con `/nombre` o en lenguaje natural ("usá impeccable para...").

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

**Problema que resuelve:** lo japonés y lo de 16 bits aparecen como decoración separada y no como un único concepto.

**Qué revisa:** concepto central, coherencia entre secciones, jerarquía, tipografía, color y ritmo.

**Cómo pedirla:**

```
/impeccable critique del sitio completo. Siento que lo japonés y lo de juego
no están compenetrados. Compará con los mockups aprobados y proponé 2 o 3
conceptos que unifiquen la identidad. No toques código todavía.
```

**Resultado esperado:** qué elementos suman, cuáles diluyen la identidad y qué concepto elegir.

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
/impeccable audit de accesibilidad y responsive. Respetá image-rendering:
pixelated y las escalas tipográficas de 25px y 20px.
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
- Jersey 25 en múltiplos de 25px para títulos y Jersey 20 en múltiplos de 20px para texto, siempre en peso 400.
- Sprites en `public/sprites`, a escala entera y con `image-rendering: pixelated`.
- No inventar proyectos, experiencia ni estadísticas.
- No nombrar ni hacer identificable la empresa actual.
- Títulos profesionales, sin nombres medievalizados.
