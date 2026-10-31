---
name: ChamDev
description: Portfolio de Camila Perez ambientado en un otoño japonés de videojuego.
colors:
  aubergine: "#3a0f34"
  tinta: "#140810"
  madera: "#351607"
  madera-noche: "#26120c"
  terracota: "#a8431f"
  oxido: "#6e2a16"
  oro: "#eaaa00"
  oro-claro: "#f2c84b"
  oro-borde: "#b98a1e"
  crema: "#f8efd8"
  papel: "#f1e5ca"
  papel-claro: "#fbf3df"
  papel-borde: "#c9a978"
typography:
  display:
    fontFamily: "Jersey 25, Segoe UI, sans-serif"
    fontSize: "75px"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "Jersey 25, Segoe UI, sans-serif"
    fontSize: "50px"
    fontWeight: 400
    lineHeight: 1
  title:
    fontFamily: "Jersey 25, Segoe UI, sans-serif"
    fontSize: "25px"
    fontWeight: 400
  body:
    fontFamily: "Jersey 20, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 400
    lineHeight: 1.35
  label:
    fontFamily: "Jersey 20, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 400
rounded:
  sm: "4px"
  md: "6px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "36px"
components:
  button-oro:
    backgroundColor: "{colors.oro}"
    textColor: "{colors.aubergine}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "44px"
  button-papel:
    backgroundColor: "{colors.papel-claro}"
    textColor: "{colors.aubergine}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    height: "44px"
  fila-menu:
    backgroundColor: "{colors.papel-claro}"
    textColor: "{colors.aubergine}"
    typography: "{typography.title}"
    rounded: "{rounded.md}"
    height: "60px"
  nav-tab-activa:
    backgroundColor: "{colors.papel-claro}"
    textColor: "{colors.aubergine}"
    rounded: "{rounded.sm}"
    height: "44px"
  panel:
    backgroundColor: "{colors.papel}"
    textColor: "{colors.aubergine}"
    rounded: "{rounded.sm}"
    padding: "24px 28px"
---

# Design System: ChamDev

## Overview

**Creative North Star: "Otoño en Kioto"**

ChamDev es un recorrido sereno por un templo japonés en otoño, contado con la memoria visual de un videojuego. La luz cálida de la tarde, la madera, el papel y las hojas crean el ambiente. El pixel art aparece en la marca, los iconos y los pequeños detalles, y aporta el guiño de videojuego sin convertir la web en un juego.

Cada pantalla es un lugar: una escena ilustrada a pantalla completa y, sobre ella, un único soporte de papel con el contenido. La densidad es baja, el ritmo es tranquilo y la interacción responde con suavidad. La calidez es el hilo común, pero nunca compite con la lectura de los proyectos.

**Key Characteristics:**
- Escenas japonesas otoñales a pantalla completa, una por sección.
- Papel, madera oscura y terracota, con toques de oro, como materiales del sistema.
- Marca y texto pixelados, de la misma familia tipográfica.
- Sprites a escala entera con píxeles nítidos.
- Interacción serena, con transiciones breves.

## Colors

La paleta es cálida y otoñal: tintas profundas sobre papel, con oro y rojos reservados para los momentos que importan.

### Primary
- **Aubergine Profundo:** color de la tinta sobre papel y de la marca en Inicio.
- **Oro de Arce:** estado activo y acción seleccionada, como el idioma actual.

### Secondary
- **Terracota de Torii:** borde del papel en el kakejiku, hover de bordes y controles, y barra de desplazamiento.

### Tertiary
- **Oro Claro:** marca sobre la barra oscura y anillo de foco sobre fondos oscuros.
- **Oro Viejo:** filetes y bordes finos de paneles, kakejiku y barra de navegación.

### Neutral
- **Papel Washi:** superficie de paneles y del kakejiku.
- **Papel Claro:** filas de menú, pestaña activa y botones claros.
- **Borde de Papel:** contorno de filas y botones en reposo.
- **Crema:** texto sobre madera y barra oscura.
- **Madera y Madera Nocturna:** fondo de respaldo y barra de navegación.
- **Óxido:** tela marrón rojiza del kakejiku y foco sobre papel.
- **Tinta:** contraste máximo sobre superficies claras.

**The Warm Only Rule.** Todo neutro tiene sesgo cálido. No se usan grises puros, azules ni violetas ajenos a la escena.

**The Scarce Gold Rule.** El oro sólido marca un estado activo. No se usa como relleno decorativo.

## Typography

**Display Font:** Jersey 25 (con Segoe UI, sans-serif)
**Body Font:** Jersey 20 (con Segoe UI, sans-serif)

**Character:** Jersey 25 aporta la voz firme de una pantalla de consola. Jersey 20 lleva esa misma voz al texto y se mantiene nítida a 20px.

### Hierarchy
- **Display** (400, 75px, 1): marca en Inicio; baja a 50px en móvil y en pantallas de poca altura.
- **Headline** (400, 50px, 1): títulos de sección y marca en la barra de navegación.
- **Title** (400, 25px): filas de menú, nombres destacados y presentación de Perfil, en Jersey 25.
- **Body** (400, 20px, 1.35): texto principal, con un ancho máximo recomendado de 65 a 75 caracteres.
- **Label** (400, 20px): botones, pestañas y selector de idioma. El estado activo se marca con color y fondo, no con peso.

**The 25 Grid Rule.** Jersey 25 solo se usa en múltiplos de 25px y con peso 400, para conservar píxeles nítidos.

**The Real Weights Rule.** Jersey 20 y Jersey 25 solo existen en peso 400. No se usa negrita sintética: la jerarquía sale de tamaño, familia y color. Jersey 20 solo se usa en múltiplos de 20px.

## Layout

Cada pantalla es una escena fija en contexto y un contenido centrado. Inicio coloca el kakejiku en el centro. Las secciones usan barra superior y un contenedor de hasta 1080px, con 36px de margen vertical y 16px lateral.

La escena llena el viewport con `object-fit: cover`, y cada ruta define su propio encuadre. En móvil el contenido ocupa casi todo el ancho y conserva 16px de margen. Hay ajustes específicos para menos de 521px de ancho, menos de 361px de ancho y menos de 701px de alto.

El selector de idioma es una única pieza global, anclada a 10px del borde superior y a `max(16px, 3vw)` del derecho en todas las rutas. Ningún contenido reserva espacio dentro de sus componentes para él: la barra deja su hueco y, por debajo de 841px, las pestañas pasan a una fila propia.

## Elevation & Depth

La profundidad nace de los materiales: el papel flota sobre la escena con una sombra ambiental cálida. Los filetes de oro y terracota dan grosor al soporte. El gradiente solo se usa como textura de material, nunca como color de interfaz.

### Shadow Vocabulary
- **Sombra colgante** (`drop-shadow(0 10px 14px rgb(30 14 6 / 40%))`): kakejiku sobre la escena.
- **Sombra de panel** (`0 14px 18px rgb(30 14 6 / 45%)`): paneles sobre la escena.
- **Sombra de barra** (`0 6px 16px rgb(20 8 16 / 45%)`): barra de navegación.

**The Warm Shadow Rule.** Las sombras usan marrones oscuros y siempre tienen desplazamiento y desenfoque.

## Shapes

Las esquinas son discretas: 4px en superficies y pestañas, 6px en controles. El kakejiku, con dos varillas de madera oscura, es la silueta distintiva del sitio. Los filetes de oro y terracota enmarcan el papel como una pieza montada.

## Components

### Buttons
Serenos y claros.
- **Shape:** esquinas suaves (6px), altura mínima de 44px.
- **Primary:** oro con tinta aubergine para el estado activo; aubergine con crema para la acción principal.
- **Hover / Focus:** el borde pasa a terracota en 150ms; el foco es visible con 3px de contorno.
- **Secondary:** papel claro con tinta aubergine.
- **Active:** desplazamiento de 2px hacia abajo.

### Cards / Containers
- **Corner Style:** 4px.
- **Background:** Papel Washi.
- **Shadow Strategy:** Sombra de panel.
- **Border:** filete de 2px en Oro Viejo.
- **Internal Padding:** 24px por 28px.

### Navigation
Barra de Madera Nocturna con marca dorada en Jersey 25 y pestañas de texto. La pestaña activa pasa a Papel Claro con tinta aubergine. El hover usa un velo crema y Oro Claro en 150ms, solo en dispositivos con puntero.

### Fila de menú
Elemento principal de navegación en Inicio y base de las listas. Combina icono pixelado de 48px, texto y una flecha fina de 10 por 18px, sobre papel, con al menos 60px de alto. En hover, el borde y la flecha pasan a Terracota de Torii. La fila activa usa Madera con texto y flecha dorados.

### Kakejiku
Rollo japonés que presenta la identidad en Inicio, de hasta 530px de ancho. Tiene dos varillas de madera oscura en pixel art, con veta y tapas redondeadas (30px arriba y 32px abajo), tela Óxido y papel con filetes finos de oro y terracota. Las varillas son los únicos controles para abrirlo y cerrarlo, y el contenido cerrado no puede recibir foco.

Se despliega en 800ms con movimiento suave. Al abrir, el contenido aparece cuando ya hay espacio; al cerrar, desaparece primero. Solo se anima solo en la primera carga, y es instantáneo con movimiento reducido.

### Mapa de Recorrido
Sendero de 248 por 100px mostrado a 3x, con paradas como botones superpuestos. El torii marca experiencia y el farol marca formación. Los faroles empiezan apagados y quedan encendidos al visitarlos. El detalle va debajo, con flechas sin contorno que se ocultan en los extremos. En móvil pasa a una lista vertical sin ilustración.

### Enlaces de redes
Enlaces discretos con símbolo marrón oscuro de 24px, sin fondo ni contenedor, nombre de 20px y un separador dorado de 4px. Nunca compiten con la navegación principal.

## Do's and Don'ts

### Do:
- **Do** dar a cada sección una escena japonesa otoñal propia.
- **Do** mostrar los sprites a escala entera con `image-rendering: pixelated`.
- **Do** usar Jersey 25 solo en 25, 50 o 75px.
- **Do** mantener transiciones de color breves y serenas, de unos 150ms, y respetar el movimiento reducido.
- **Do** limitar los momentos animados a uno por pantalla.
- **Do** verificar el significado de cualquier kanji o kana antes de usarlo.
- **Do** priorizar iconos reconocibles sin leer el texto, dibujados en 20 por 20px dentro de un lienzo de 24 por 24px y mostrados a 2x, con contorno marrón oscuro y la paleta de crema, beige, marrón, terracota y toques dorados.

### Don't:
- **Don't** usar tipografías góticas europeas, iconografía de RPG medieval ni nombres medievalizados.
- **Don't** escalar sprites a factores no enteros ni aplicarles `scale` en interacciones.
- **Don't** recrear ni retocar las escenas elegidas.
- **Don't** usar hojas flotantes ni decoración que compita con el contenido.
- **Don't** usar texto japonés de relleno ni símbolos cargados, como los rayos del sol naciente.
- **Don't** animar propiedades costosas en interacciones frecuentes.
