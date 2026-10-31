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

- Estética de RPG de 16 bits otoñal, con títulos profesionales y sin nombres medievalizados.
- Los sprites van en `public/sprites` y se muestran a escala entera con `image-rendering: pixelated`.
- No inventar datos de proyectos, experiencia ni estadísticas.
