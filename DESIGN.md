---
name: ChamDev
description: Portfolio de Camila Perez con dirección Modern Retro RPG.
colors:
  fondo: "#faf6ef"
  superficie: "#fffcf7"
  elevada: "#ffffff"
  borde: "#e9e1d3"
  borde-control: "#8c7b72"
  error: "#a8321f"
  texto: "#2a1e26"
  texto-suave: "#6b5b63"
  acento: "#c64a16"
  dorado: "#e2a92b"
  ciruela: "#6e2d5b"
  noche-fondo: "#14101a"
  noche-superficie: "#1e1824"
  noche-elevada: "#28212f"
  noche-borde: "#3a3142"
  noche-borde-control: "#857790"
  noche-error: "#ff8f80"
  noche-texto: "#f3ede4"
  noche-texto-suave: "#b9aeb8"
  noche-acento: "#ff925c"
  noche-dorado: "#f2c14e"
  noche-ciruela: "#c27bb0"
typography:
  display:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(40px, 10vw, 64px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(30px, 6vw, 40px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  subtitle:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.35
  body:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  detail:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
  small:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
  brand:
    fontFamily: "Jersey 25, Onest, sans-serif"
    fontSize: "25px"
    fontWeight: 400
rounded:
  sm: "8px"
  md: "10px"
  lg: "16px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "14px"
  lg: "28px"
  xl: "36px"
components:
  enlace-principal:
    backgroundColor: "{colors.acento}"
    textColor: "{colors.fondo}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "44px"
  enlace-secundario:
    backgroundColor: "{colors.superficie}"
    textColor: "{colors.texto}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "44px"
  menu-opcion:
    backgroundColor: "transparent"
    textColor: "{colors.texto}"
    rounded: "{rounded.md}"
    height: "64px"
  tarjeta:
    backgroundColor: "{colors.superficie}"
    textColor: "{colors.texto}"
    rounded: "{rounded.lg}"
    padding: "8px"
  control-segmentado:
    backgroundColor: "{colors.superficie}"
    textColor: "{colors.texto-suave}"
    typography: "{typography.small}"
    rounded: "{rounded.md}"
    height: "36px"
---

# Design System: ChamDev

## Overview

**Creative North Star: "Modern Retro RPG"**

ChamDev es la interfaz de un producto digital moderno que recuerda al menú de un videojuego de 16 bits. La base es limpia y profesional: tarjetas con bordes sutiles, mucho espacio negativo, esquinas levemente redondeadas y sombras discretas. El juego aparece en los acentos: el cursor pixel que acompaña la selección, los iconos de 16 bits, la trama de dithering del fondo y la marca ChamDev.

La referencia es Inicio. Todas las vistas usan el mismo fondo, las mismas superficies y los mismos controles, y el contenido profesional siempre se lee primero.

**Key Characteristics:**
- Fondo con brillos radiales cálidos (durazno y ámbar de día, brasa y cobre de noche) y una trama de dithering que solo aparece en los bordes de esos brillos.
- Superficies claras con bordes de 1px y sombras cortas; en modo noche, superficies ciruela oscuro.
- Onest para todo el texto; Jersey 25 solo para la marca.
- Iconos pixel como máscaras que toman el color del tema.
- Un único acento de interacción: el naranja de la paleta Fuego vibrante.
- Modo claro y modo oscuro reales, elegidos con el control de tema.

## Colors

Neutros cálidos con el naranja **Fuego vibrante** como color de acción, dorado como acento y ciruela como tercer color. Todos los colores salen de los tokens `--color-*` de `src/styles/global.css`, que cambian con `[data-tema='noche']`.

### Primary
- **Acento** (`--color-acento`): naranja de acción principal, estado activo, cursor del menú, foco y baldosas de iconos. Sus variantes suaves (`--color-acento-suave`, `--color-activo`) marcan fondos de selección. Como texto solo va sobre superficie o elevada; sobre el fondo de página se usa en iconos, bordes, subrayados y foco.

### Secondary
- **Ciruela** (`--color-ciruela`): tercer color del sistema, para diferenciar categorías, viñetas de listas y el brillo inferior del fondo.

### Tertiary
- **Dorado** (`--color-dorado`): acento puntual, como el punto del rol en Inicio. Nunca como color de texto sobre fondo claro.

### Neutral
- **Fondo** (`--color-fondo`): base de la página.
- **Superficie** (`--color-superficie`): tarjetas, menú, controles e insignia.
- **Elevada** y **Pastilla** (`--color-elevada`, `--color-pastilla`): capas sobre la superficie, como la pastilla del control segmentado.
- **Borde** (`--color-borde`): contorno de 1px de todas las superficies.
- **Texto** y **Texto suave** (`--color-texto`, `--color-texto-suave`): contenido principal y secundario.

### Functional
- **Borde de control** (`--color-borde-control`): contorno de campos de formulario y controles que necesitan verse como tales. `--color-borde` es solo decorativo.
- **Error** (`--color-error`, `--color-error-suave`): mensajes de error y borde del campo con error, siempre junto a un texto que explique el problema.
- **Sobre acento** (`--color-sobre-acento`): texto e iconos sobre acento sólido. Blanco de día (el crema del fondo no llega a 4.5:1 sobre `#c64a16`) y `--color-fondo` de noche.
- **Foco** (`--color-foco`): contorno de foco, igual al acento.
- **Tintes suaves** (`--color-acento-suave`, `--color-ciruela-suave`, `--color-dorado-suave`): fondos de baldosas, pastillas y etiquetas.

### Contrast

Medido según WCAG 2.2 (AA: 4.5:1 para texto normal, 3:1 para texto grande y controles).

| Par | Día | Noche |
|---|---|---|
| Texto sobre superficie | 15.6 | 14.9 |
| Texto suave sobre superficie | 6.2 | 8.1 |
| Acento sobre superficie | 4.7 | 7.9 |
| Acento sobre elevada | 4.8 | 7.1 |
| Acento sobre fondo (solo no texto) | 4.4 | 8.5 |
| Acento sobre el centro del brillo 1 (solo no texto) | 3.6 | 5.8 |
| Sobre acento sobre acento | 4.8 | 8.5 |
| Error sobre superficie | 6.5 | 7.8 |
| Borde de control sobre superficie | 4.0 | 4.2 |
| Borde decorativo sobre superficie | 1.3 | 1.4 |
| Dorado sobre superficie | 2.1 | 10.3 |
| Acento sobre acento suave (solo iconos) | 4.1 | 6.4 |
| Ciruela sobre ciruela suave | 7.9 | 4.4 |

**The Tint Rule.** Sobre un tinte suave, el texto va en `--color-texto`. El color del tinte se usa solo en iconos, puntos y bordes.

**The Warm Neutral Rule.** Los neutros tienen sesgo cálido de día y ciruela de noche. No se usan grises puros.

**The One Accent Rule.** El acento naranja es el único color de interacción. Ciruela y dorado no indican estados interactivos.

## Typography

**Interface Font:** Onest (con Segoe UI, system-ui, sans-serif), pesos 400, 500, 600 y 700.
**Brand Font:** Jersey 25 (con Onest, sans-serif), peso 400.

**Character:** Onest es una sans-serif moderna y legible que da el tono de producto. Jersey 25 aporta la voz de consola y queda reservada a la marca y a acentos pixel.

### Hierarchy

Cada nivel es un token `--tipo-*` (shorthand de `font`) en `src/styles/global.css`; el espaciado entre letras va aparte, en `--tracking-*`.

| Token | Valor | Uso |
|---|---|---|
| `--tipo-display` + `--tracking-display` | 700, `clamp(40px, 10vw, 64px)`, 1.02, -0.035em | Nombre en Inicio. Solo una vez en el sitio. |
| `--tipo-titulo` + `--tracking-titulo` | 700, `clamp(30px, 6vw, 40px)`, 1.1, -0.03em | `h1` de cada sección, con la clase `.titulo-seccion`. |
| `--tipo-subtitulo` + `--tracking-subtitulo` | 600, 22px, 1.3, -0.01em | Rol en Inicio y `h2` de bloques dentro de una sección. |
| `--tipo-encabezado` | 600, 17px, 1.35 | Nombres de opciones de menú, títulos de tarjetas y `h3`. |
| `--tipo-cuerpo` | 400, 17px, 1.6 | Párrafos. Ancho máximo `--ancho-lectura` (65ch). |
| `--tipo-detalle` | 400, 15px, 1.5 | Descripciones, metadatos, ayudas de formulario y errores. |
| `--tipo-etiqueta` | 500, 15px, 1.2 (600 en la acción principal) | Botones y enlaces de acción. |
| `--tipo-chico` | 600, 14px, 1.2 | Controles segmentados y pastillas. |
| `--tipo-marca` | Jersey 25, 400, 25px, 1.2 | Insignia ChamDev. |

La propuesta de valor de Inicio es una frase corta y usa 17px con el interlineado heredado; los párrafos de las secciones usan `--tipo-cuerpo`.

**The Brand Only Rule.** Jersey 25 solo se usa en la marca y en acentos pixel, en múltiplos de 25px y con peso 400.

## Layout

Inicio usa una columna centrada de hasta 520px con 96px de margen superior, para dejar lugar a los controles de idioma y tema. El contenido va centrado; los textos largos y los formularios se alinean a la izquierda dentro de su tarjeta.

Los controles de idioma y tema son una pieza global anclada a 24px del borde superior y a `max(16px, 3vw)` del derecho.

El margen lateral mínimo es de 16px en todas las rutas.

## Elevation & Depth

La profundidad es sutil y nace de bordes y sombras cortas, nunca de ilustraciones de fondo.

### Shadow Vocabulary
- **Sombra elevada** (`--sombra-elevada`): tarjetas y menú. De día, dos capas cortas en ciruela muy transparente; de noche, un filo de luz interior y una sombra negra.
- **Sombra chica** (`--sombra-chica`): insignia, controles y la acción principal.

**The Quiet Shadow Rule.** Una superficie lleva una sola sombra del vocabulario. No se combinan sombras ni se agregan brillos de color.

## Shapes

- 16px (`--radio-grande`) en tarjetas y menús.
- 10px (`--radio`) en botones, opciones, baldosas, insignia y controles.
- 8px (`--radio-chico`) en piezas internas, como la pastilla del control segmentado.

El cursor y los iconos pixel son la única geometría pixelada; las superficies no usan marcos pixel.

## Components

### Fondo radial
`FondoRadial`: tres brillos radiales (`--brillo-1`, `--brillo-2`, `--brillo-3`) sobre `--color-fondo`. De día: durazno `#f5b18c` y ámbar `#f5cf79` translúcidos sobre crema, con un toque ciruela abajo. De noche: brasa `#5a292d` y cobre `#57351d` sobre `#14101a`, para que el fondo parezca de brasas y no una versión marrón del modo claro. Dos capas de trama de dithering de 6px en el color del acento, enmascaradas en anillo. Las posiciones cambian entre día y noche.

### Menú de juego
`MenuJuego`: tarjeta con opciones de 64px de alto. Cada opción tiene una baldosa de acento suave de 40px con un icono pixel, el nombre y una descripción. Un cursor pixel en acento de 10 por 18px se desplaza hasta la opción activa y oscila 2px con `steps(1)`. Se navega con flechas, Inicio y Fin. La opción activa usa `--color-activo` y la baldosa pasa a acento sólido. En pantallas táctiles el cursor solo aparece con foco de teclado.

### Enlaces de acción
`EnlaceAccion`: 44px de alto, radio de 10px e icono pixel de 24px.
- **Principal:** fondo de acento con texto en `--color-sobre-acento`. En hover, brillo de 1.08.
- **Secundaria:** superficie con borde. En hover, borde de acento y desplazamiento de 1px hacia arriba.
- **Active:** escala de 0.97.

### Control segmentado
`ControlSegmentado`: grupo de botones de 36px sobre una superficie con borde, con una pastilla que se desliza hasta la opción actual en 180ms. Se usa para el idioma.

### Selector de tema
`SelectorTema`: un botón de 44px con el icono del modo elegido (Sistema, Claro u Oscuro) que despliega un menú de juego con las tres opciones. Cada opción tiene el cursor pixel y una baldosa de 32px; la elegida pasa a acento sólido. Se abre con clic o flecha abajo, se recorre con flechas, se elige con Enter y se cierra con Escape, clic afuera o Tab. Abre en 160ms con `--ease-salida` desde su esquina. La preferencia se guarda, se sincroniza entre pestañas y, en Sistema, sigue a `prefers-color-scheme` en vivo; un script en `index.html` aplica el tema antes de pintar para evitar el destello.

### Barra de navegación
`Navbar`: tarjeta con la marca, cinco secciones (Sobre mí, Tecnologías, Experiencia, Proyectos y Contacto) con su icono pixel, y los controles de idioma y tema. Por debajo de 1100px pasa a un botón "Menú" con panel desplegable.

### Área de experiencia
`AreaExperiencia`: tarjeta elevada con radio grande para cada área de trabajo profesional. Cabecera con baldosa de acento suave de 40px y título de 20px; debajo, en dos columnas (una en móvil), "El problema" y "Qué hice" con viñetas ciruela, y una fila de tecnologías como pastillas de texto de 14px, sin sprites, para no repetir la sección Tecnologías. No muestra empresas ni imágenes; las tarjetas con imagen quedan para Proyectos.

### Icono pixel
`IconoPixel`: máscara PNG (`public/sprites/mascara-*.png`) pintada con `currentColor`, de 24px por defecto. Así los iconos siguen el tema y el estado. Se dibujan en una grilla de 12×12 con píxeles de 2px.

### Insignia de marca
Pastilla de superficie con borde y sombra chica, con ChamDev en Jersey 25 a 25px.

## Motion

- Transiciones de color de 150ms; movimientos con `--ease-salida` (`cubic-bezier(0.23, 1, 0.32, 1)`) entre 140 y 260ms.
- Entrada escalonada de las opciones del menú: 260ms, con 40ms de diferencia entre cada una.
- Respuesta al presionar: escala entre 0.96 y 0.98.
- Con `prefers-reduced-motion` se quitan las animaciones y las transiciones.

## Do's and Don'ts

### Do:
- **Do** tomar todos los colores de los tokens `--color-*` y verificar cada vista en día y en noche.
- **Do** usar el acento para todo estado interactivo: activo, foco (2px con 2px de separación) y acción principal.
- **Do** dibujar los iconos monocromos como máscaras y mostrarlos con `IconoPixel`.
- **Do** mostrar los sprites a color (como los iconos de tecnologías) a escala entera, con `image-rendering: pixelated` y `filter: var(--contorno-sprite)`, que de noche les dibuja un contorno claro de 1px para que los sprites oscuros no se pierdan sobre superficies oscuras.
- **Do** mantener una sola animación protagonista por pantalla.
- **Do** usar títulos profesionales y lenguaje directo.

### Don't:
- **Don't** usar ilustraciones de escena como fondo ni marcos pixel en las superficies.
- **Don't** usar elementos de cultura japonesa ni iconografía de RPG medieval.
- **Don't** usar el dorado como texto sobre fondo claro.
- **Don't** usar Jersey 25 fuera de la marca y los acentos pixel.
- **Don't** escalar sprites a factores no enteros.
- **Don't** inventar datos de proyectos, experiencia ni estadísticas.
