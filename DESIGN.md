---
name: ChamDev
description: Portfolio de Camila Perez con dirección Modern Retro RPG.
colors:
  fondo: "#faf6ef"
  superficie: "#fffcf7"
  elevada: "#ffffff"
  borde: "#e9e1d3"
  texto: "#2a1e26"
  texto-suave: "#6b5b63"
  turquesa: "#0e7c77"
  dorado: "#e2a92b"
  ciruela: "#6e2d5b"
  noche-fondo: "#14101a"
  noche-superficie: "#1e1824"
  noche-elevada: "#28212f"
  noche-borde: "#3a3142"
  noche-texto: "#f3ede4"
  noche-texto-suave: "#b9aeb8"
  noche-turquesa: "#4fd1c5"
  noche-dorado: "#f2c14e"
  noche-ciruela: "#c27bb0"
typography:
  display:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(40px, 10vw, 64px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  subtitle:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Onest, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
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
    backgroundColor: "{colors.turquesa}"
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
- Fondo con brillos radiales suaves y una trama de dithering que solo aparece en los bordes de esos brillos.
- Superficies claras con bordes de 1px y sombras cortas; en modo noche, superficies ciruela oscuro.
- Onest para todo el texto; Jersey 25 solo para la marca.
- Iconos pixel como máscaras que toman el color del tema.
- Un único acento de interacción: turquesa.
- Modo claro y modo oscuro reales, elegidos con el control de tema.

## Colors

Neutros cálidos con turquesa como color de acción, dorado como acento y ciruela como tercer color. Todos los colores salen de los tokens `--color-*` de `src/styles/global.css`, que cambian con `[data-tema='noche']`.

### Primary
- **Turquesa** (`--color-turquesa`): acción principal, estado activo, cursor del menú, foco y baldosas de iconos. Sus variantes suaves (`--color-turquesa-suave`, `--color-activo`) marcan fondos de selección.

### Secondary
- **Ciruela** (`--color-ciruela`): tercer color del sistema, para diferenciar categorías y en los brillos del fondo nocturno.

### Tertiary
- **Dorado** (`--color-dorado`): acento puntual y brillo del fondo. Nunca como color de texto sobre fondo claro.

### Neutral
- **Fondo** (`--color-fondo`): base de la página.
- **Superficie** (`--color-superficie`): tarjetas, menú, controles e insignia.
- **Elevada** y **Pastilla** (`--color-elevada`, `--color-pastilla`): capas sobre la superficie, como la pastilla del control segmentado.
- **Borde** (`--color-borde`): contorno de 1px de todas las superficies.
- **Texto** y **Texto suave** (`--color-texto`, `--color-texto-suave`): contenido principal y secundario.

**The Warm Neutral Rule.** Los neutros tienen sesgo cálido de día y ciruela de noche. No se usan grises puros.

**The One Accent Rule.** Turquesa es el único color de interacción. Ciruela y dorado no indican estados interactivos.

## Typography

**Interface Font:** Onest (con Segoe UI, system-ui, sans-serif), pesos 400, 500, 600 y 700.
**Brand Font:** Jersey 25 (con Onest, sans-serif), peso 400.

**Character:** Onest es una sans-serif moderna y legible que da el tono de producto. Jersey 25 aporta la voz de consola y queda reservada a la marca y a acentos pixel.

### Hierarchy
- **Display** (700, `clamp(40px, 10vw, 64px)`, 1.02, -0.035em): nombre en Inicio.
- **Subtitle** (600, 22px, -0.01em): rol profesional.
- **Body** (400, 17px): texto principal y propuesta de valor, en Texto suave cuando acompaña a un título. Ancho máximo de 65 a 75 caracteres.
- **Option** (600, 17px) con **descripción** (400, 15px): opciones de menú.
- **Label** (500, 15px; 600 en la acción principal): botones y enlaces de acción.
- **Small** (600, 14px): controles segmentados.
- **Brand** (Jersey 25, 400, 25px): insignia ChamDev.

Pendiente: títulos de sección y subtítulos para las vistas internas, derivados de esta escala.

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
`FondoRadial`: tres brillos radiales (`--brillo-1`, `--brillo-2`, `--brillo-3`) sobre `--color-fondo`, con dos capas de trama de dithering de 6px enmascaradas en anillo. Las posiciones cambian entre día y noche.

### Menú de juego
`MenuJuego`: tarjeta con opciones de 64px de alto. Cada opción tiene una baldosa turquesa suave de 40px con un icono pixel, el nombre y una descripción. Un cursor pixel turquesa de 10 por 18px se desplaza hasta la opción activa y oscila 2px con `steps(1)`. Se navega con flechas, Inicio y Fin. La opción activa usa `--color-activo` y la baldosa pasa a turquesa sólido. En pantallas táctiles el cursor solo aparece con foco de teclado.

### Enlaces de acción
`EnlaceAccion`: 44px de alto, radio de 10px e icono pixel de 24px.
- **Principal:** fondo turquesa con texto en `--color-fondo`. En hover, brillo de 1.08.
- **Secundaria:** superficie con borde. En hover, borde turquesa y desplazamiento de 1px hacia arriba.
- **Active:** escala de 0.97.

### Control segmentado
`ControlSegmentado`: grupo de botones de 36px sobre una superficie con borde, con una pastilla que se desliza hasta la opción actual en 180ms. Se usa para idioma y tema.

### Icono pixel
`IconoPixel`: máscara PNG (`public/sprites/mascara-*.png`) pintada con `currentColor`, de 24px por defecto. Así los iconos siguen el tema y el estado.

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
- **Do** usar turquesa para todo estado interactivo: activo, foco (2px con 2px de separación) y acción principal.
- **Do** dibujar los iconos monocromos como máscaras y mostrarlos con `IconoPixel`.
- **Do** mostrar los sprites a color (como los iconos de tecnologías) a escala entera, con `image-rendering: pixelated`.
- **Do** mantener una sola animación protagonista por pantalla.
- **Do** usar títulos profesionales y lenguaje directo.

### Don't:
- **Don't** usar ilustraciones de escena como fondo ni marcos pixel en las superficies.
- **Don't** usar elementos de cultura japonesa ni iconografía de RPG medieval.
- **Don't** usar el dorado como texto sobre fondo claro.
- **Don't** usar Jersey 25 fuera de la marca y los acentos pixel.
- **Don't** escalar sprites a factores no enteros.
- **Don't** inventar datos de proyectos, experiencia ni estadísticas.
