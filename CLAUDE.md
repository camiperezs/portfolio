# Reglas del proyecto

## Regla principal

- No dejar comentarios en el código.

## Arquitectura

- `src/components`: componentes tontos. Reciben todo por props, no leen datos globales, contexto ni estado de la aplicación, y cada uno se encarga solo de lo suyo.
- `src/pages`: componen las pantallas. Son el único lugar que conecta componentes con datos y contexto.
- `src/data`: contenido del sitio, separado de la presentación.
- `src/context`: estado compartido, como el idioma.
- Cada componente importa su propio CSS, ubicado junto a él. `src/styles` guarda solo lo global.

## Diseño

- Dirección "Modern Retro RPG": interfaz de producto digital moderno (tarjetas con bordes sutiles, mucho espacio negativo, esquinas levemente redondeadas, sombras discretas) con el menú de videojuego, el cursor pixel, iconos de 16 bits y trama de dithering como acentos. Títulos profesionales, sin nombres medievalizados ni ornamentos.
- Paleta: neutros cálidos, naranja Fuego vibrante (`--color-accent`), dorado y ciruela, con un modo oscuro real. Los colores salen de los tokens `--color-*` de `src/styles/global.css`; el dorado es solo acento, nunca texto sobre fondo claro.
- Tipografía: Onest para texto e interfaz; Jersey 25 solo para la marca ChamDev y acentos pixel.
- Los iconos pixel art van en `public/sprites` a escala entera. Los monocromos se dibujan como máscara (`mask-*.png`) y se muestran con `PixelIcon` para tomar el color del tema.
- No inventar datos de proyectos, experiencia ni estadísticas.
