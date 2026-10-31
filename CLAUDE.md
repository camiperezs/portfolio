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

- Estética de videojuego de 16 bits combinada con cultura japonesa y colores cálidos, con títulos profesionales y sin nombres medievalizados.
- Tipografía: Jersey 25 para marca y títulos, en múltiplos de 25px; Jersey 20 para el texto, en múltiplos de 20px. Ambas solo tienen peso 400.
- Los iconos pixel art van en `public/sprites` y se muestran a escala entera con `image-rendering: pixelated`.
- No inventar datos de proyectos, experiencia ni estadísticas.
