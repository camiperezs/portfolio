# Plan: unificar las vistas con el estilo de Inicio

Rama: `develop`. Referencia visual: Inicio (commit `8cd6a34`, "Modern Retro RPG"). Las demás vistas se adaptan a Inicio; Inicio no cambia.

## 1. Diagnóstico

Hoy conviven dos sistemas de diseño en el mismo sitio.

| Aspecto | Inicio (sistema nuevo) | Sobre mí, Tecnologías, Trabajo, Contacto (sistema viejo) |
|---|---|---|
| Fondo | `FondoRadial`: degradés radiales + trama de dithering, tokens `--brillo-*` y `--trama` | `FondoEscena`: ilustración PNG japonesa por ruta (`public/ambientes`, `data/ambientes.ts`) |
| Tokens | `--color-*`, `--radio*`, `--sombra-*`, con modo noche real (`[data-tema='noche']`) | `--papel`, `--madera`, `--aubergine`, `--oro`, `--texto-ventana`... **sin variante noche**: los paneles siguen en papel claro de noche |
| Tipografía | Onest (400–700) para todo; Jersey 25 solo en la insignia ChamDev | Jersey 20 en el cuerpo (default de `body`) y Jersey 25 en títulos (`.titulo` 50px, subtítulos 25px) |
| Superficies | Tarjeta: borde 1px `--color-borde`, radio 16px, `--sombra-elevada`, fondo `--color-superficie` | `Panel` con `border-image` pixel (`ventana.png`) y `filter: drop-shadow` |
| Navegación | Sin barra; `MenuJuego` con baldosas turquesa, iconos máscara y cursor pixel animado | `Navbar` con marco pixel oscuro (`ventana-oscura.png`), faroles PNG y hueco fijo de 212px para los controles |
| Botones / enlaces | `EnlaceAccion` (principal turquesa / secundaria superficie), `ControlSegmentado` | `Boton` (aubergine / papel / oro), enlaces terracota, sello terracota en Contacto |
| Iconos | `IconoPixel` con máscaras que toman el color del tema | PNG a color (`cursor.png`, faroles, `red-*.png`, paradas del mapa) |
| Foco | 2px turquesa | 3px `--oro-claro` global, con overrides `--oxido` por componente |
| Alineación | Centrada, columna de 520px | Contenido a la izquierda para dejar ver la escena (`contenido-izquierda`) |

Archivos afectados por el sistema viejo:

- Layout: `pages/Layout.*`, `components/layout/Navbar.*`, `components/layout/FondoEscena.*`, `data/ambientes.ts`.
- Primitivas: `Panel`, `Boton`, `Pestanas`, `FilaMenu`, `Etiqueta`.
- Por vista: `ListaCategorias`, `GrillaTecnologias` (Tecnologías); `CartaTrabajo`, `MarcoImagen`, `ListaTecnologias` y estilos `.ficha-*` en `Trabajo.css` (Trabajo y detalle); `MapaRecorrido`, `IconosContacto`, retrato con doble filete dorado (Sobre mí); `CartaContacto`, `ContactoDirecto`, `SobreEnviado` (Contacto).
- Global: primer bloque `:root` de `styles/global.css`, `body` (fondo madera, Jersey 20, `image-rendering: pixelated`), `::selection`, scrollbar, `:focus-visible`, `.titulo`.

Ya del sistema nuevo y reutilizables: `FondoRadial`, `MenuJuego`, `EnlaceAccion`, `ControlSegmentado`, `IconoPixel`, `Marco` (controles de idioma/tema).

### Documentación y skills desactualizadas

- `DESIGN.md` describe todavía "Otoño en Kioto" (Jersey 20/25, papel, madera, escenas). Contradice `CLAUDE.md`, que ya define "Modern Retro RPG".
- `.claude/skills/portfolio-workflow` (traída de `main`) describe el sitio vanilla (`index.html`, `style.css`, `script.js`) y su "Deuda conocida" no aplica a `develop`, que es React + Vite.
- `skills-lock.json` y `docs/guia-skills.md` usan `emil-design-eng` e `impeccable`, que no están en las skills de `main`.
- `.gitignore` de `develop` ignora `.claude/skills`, mientras que `main` las versiona.

## 2. Decisiones tomadas

1. **Recorrido (Sobre mí):** el mapa ilustrado se reemplaza por una línea de tiempo con el estilo de Inicio. Antes se reescriben los textos de cada paso, que hoy no siguen un mismo criterio (ver sección 4).
2. **Navegación en secciones:** barra superior con el lenguaje de Inicio.
3. **Escenas japonesas:** se eliminan `public/ambientes`, `scripts/ambientes`, el favicon `hoja-sello.png` y los sprites del mapa, los faroles y las paradas.
4. **Skills:** alineadas con `main`. `develop` incorporó con un merge los commits de skills de `main` y ahora versiona `.claude/skills` (se quitó del `.gitignore`), con `emil-design-eng` revisada e instalada.
5. **Empresa actual:** se puede mencionar el rubro (automatización con IA), pero no el nombre.

## 3. Etapas de implementación

Cada etapa deja el sitio funcionando y se puede commitear por separado. El orden de skills sigue `portfolio-workflow` (categorías B, C y H).

### Etapa 0: preparación de documentación y skills

Estado: hecha. `emil-design-eng` se revisó (un único `SKILL.md` de texto, con licencia MIT, sin scripts, sin URLs ejecutables y sin caracteres ocultos) y se instaló. También se actualizaron `PRODUCT.md`, `.claude/product-marketing.md` y `docs/guia-skills.md`, que todavía describían la identidad japonesa o el perfil anterior.

- Reescribir `DESIGN.md` con la dirección Modern Retro RPG: tokens `--color-*` día/noche, Onest, Jersey 25 solo marca, radios 8/10/16, sombras, componentes `MenuJuego`, `EnlaceAccion`, `ControlSegmentado`, `IconoPixel`.
- Actualizar `portfolio-workflow` al stack React/Vite (rutas, `src/pages`, `src/components`, reglas de `CLAUDE.md`) y vaciar la deuda vanilla.
- Instalar `emil-design-eng` en forma local si se va a usar en el pulido.
- Skills: `frontend-design` (fijar el sistema de tokens y principios antes de tocar vistas).

### Etapa 1: fundaciones globales

Estado: hecha. Se agregaron los tokens `--color-borde-control`, `--color-error`, `--color-error-suave`, `--color-sobre-acento`, `--color-foco`, los tintes ciruela y dorado, la escala `--tipo-*`, `--tracking-*`, `--ancho-lectura` y la clase `.titulo-seccion`, con contraste medido en `DESIGN.md`. Inicio pasó a usar `--tipo-marca` y `--tipo-display`, con los mismos valores. Hallazgo: `--color-borde` no alcanza 3:1 y no sirve como contorno de campos de formulario; para eso está `--color-borde-control`.

- Completar los tokens nuevos con lo que piden las secciones: color de error, éxito, texto sobre turquesa, escala tipográfica (título de sección, subtítulo, cuerpo, etiqueta) y un estilo de título de sección en Onest que reemplace `.titulo`.
- Mantener los tokens viejos en esta etapa para no romper nada; se borran en la Etapa 6.
- Skills: `frontend-design`, `accessibility` (contraste de cada par texto/fondo en día y noche; el dorado nunca como texto sobre claro).

### Etapa 2: shell de las secciones

Estado: hecha. `Layout` usa `FondoRadial` y el contenido queda centrado (con `image-rendering: pixelated` para los sprites viejos hasta migrarlos). `Navbar` es una tarjeta con la marca, secciones con `IconoPixel` y los controles integrados; debajo de 960px pasa a botón "Menú" con panel (Escape, clic afuera o elegir sección lo cierran). Los controles viven en `pages/ControlesSitio.tsx`; `Marco` solo los muestra flotando en Inicio. Se quitó `faroles` de `data/navegacion.ts`. `FondoEscena` y `data/ambientes.ts` quedan sin uso hasta la Etapa 6. Verificado con capturas a 375, 960 y 1280px, día y noche, ES y EN.

- `Layout`: reemplazar `FondoEscena` por `FondoRadial`; centrar el contenido con un ancho máximo y quitar `lado`/`velo`.
- `Navbar`: barra superior. Superficie con borde sutil, insignia ChamDev en Jersey 25 como en Inicio, enlaces con `IconoPixel` (máscaras persona/código/maletín/sobre de `data/navegacion.ts`), activo con `--color-activo` y turquesa, menú móvil accesible (Escape, foco). Quitar faroles y el hueco fijo de 212px: integrar los controles de `Marco` en el flujo de la barra.
- Skills: `frontend-design`, `composition-patterns` (variantes explícitas en lugar de booleanos), `accessibility` (landmarks, `aria-current`, teclado).

### Etapa 3: primitivas compartidas

Estado: hecha.
- `Panel` es la tarjeta del sistema nuevo.
- `Boton` (botón) y `EnlaceAccion` (enlace) comparten `Accion.css`, con variantes `principal` y `secundaria`; se quitaron las variantes `papel` y `oro` y los CSS `Boton.css` y `EnlaceAccion.css`.
- `Pestanas` toma el estilo de `ControlSegmentado`.
- `FilaMenu` toma el estilo de `MenuJuego` (cursor máscara, baldosa de 40px, sprite a 24px nativos) y se quitó la variante farol (`iconoActivo`, `tamanoIcono`).
- `Etiqueta` pasa a pastilla con tinte y punto de color.
- Puente de tokens en `global.css`: `--texto-ventana`, `--texto-ventana-suave`, `--acento-ventana`, `--resalte-ventana`, `--superficie-ventana`, `--papel-claro` y `--papel-borde` apuntan a los tokens nuevos, para que los componentes de vista sin migrar sigan el tema. Se borran en la Etapa 6.
- Por la revisión de `web-design-guidelines`: `color-scheme` por tema y `touch-action: manipulation` en los controles.
- Pendiente para la Etapa 4: reflejar la pestaña de Sobre mí en la URL; en Contacto, los chips y campos todavía usan el borde decorativo y deben pasar a `--color-borde-control`.

- `Panel` → tarjeta del sistema nuevo (la misma superficie que `.menu-seleccion`).
- `Boton` + `EnlaceAccion` → una sola familia con variantes principal y secundaria, como botón y como enlace. Evaluar con `composition-patterns` si conviene un componente con `as` o dos componentes explícitos.
- `Pestanas` → pestañas con el lenguaje de `ControlSegmentado` (pastilla deslizante) o subrayado turquesa; cursor como `IconoPixel`.
- `FilaMenu` → reutilizar el estilo de opción de `MenuJuego` (baldosa turquesa + texto Onest).
- `Etiqueta` → pastillas suaves (`--color-turquesa-suave`, ciruela y dorado con texto oscuro).
- Skills: `composition-patterns`, `react-best-practices`, `accessibility` (roles de tabs y foco).

### Etapa 4: vistas, de la más simple a la más compleja

Estado: hecha.
- Tecnologías: baldosas con sprites a 48px y subtítulo con la escala nueva.
- Trabajo: cartas con borde sutil, `MarcoImagen` sin filete ni prop `grande`, respaldo con la máscara del maletín y "Ver sitio publicado" como acción principal.
- Sobre mí: textos del recorrido reescritos con el esquema de la sección 4 (en inglés, "Arquitectura en Ciberseguridad" deja de figurar como "Cybersecurity Architect"); `LineaTiempo` del paso más reciente al más antiguo; pestaña en la URL (`?seccion=recorrido`); acciones de contacto iguales a Inicio. Se eliminaron `MapaRecorrido`, `IconosContacto` y `contactos`.
- Contacto: campos con `--color-borde-control`, foco turquesa y error en `--color-error`; motivos como pastillas con indicador cuadrado; botón principal "Enviar" en lugar del sello; `ContactoDirecto` y `SobreEnviado` con máscaras y acciones del sistema; "Enviando…" con puntos suspensivos y `spellCheck` desactivado en el email.
- Verificado con capturas de cada vista en día, noche, celular, inglés, errores de validación y envío exitoso simulado.

1. **Tecnologías:** dos tarjetas (categorías y detalle), `ListaCategorias` sobre la nueva fila, `GrillaTecnologias` con hover suave. Los sprites `d-*.png` se mantienen como acento pixel.
2. **Trabajo y detalle:** reemplazar el respaldo `farolSinImagen` (sprite de farol, en `data/trabajo.ts`) por un icono máscara con `IconoPixel`, por ejemplo el maletín. `CartaTrabajo` como tarjeta con imagen, título Onest 600 y etiquetas nuevas; `MarcoImagen` sin filete dorado (radio + borde sutil); `ListaTecnologias` como pastillas; `.ficha-*` con jerarquía Onest, "volver" con cursor máscara y enlaces turquesa.
3. **Sobre mí:** retrato con radio y borde sutil, pestañas nuevas, `IconosContacto` → `EnlaceAccion` con `redes` (igual que Inicio).
   - Primero, textos: aplicar la propuesta de la sección 4 en `data/idiomas/es.ts` y `en.ts`, con los datos `[COMPLETAR]` confirmados.
   - Datos: en `data/sobreMi.ts`, quitar `x`, `y`, `mapaRecorrido`, `iconosParada` e `iconosParadaApagada`; ajustar `TextoParada` al esquema nuevo.
   - Componente: `MapaRecorrido` se reemplaza por un componente nuevo de línea de tiempo (por ejemplo `LineaTiempo`), en lugar de adaptarlo. Es una lista ordenada (`<ol>`) con un eje vertical, un punto por paso (turquesa para experiencia y ciruela para formación) y una tarjeta por paso con fecha, título, lugar, texto, logros y enlaces. Tiene el mismo diseño en móvil y en escritorio.
   - Interacción: se recomienda mostrar todos los pasos abiertos, porque son seis y se leen de corrido. Si queda muy largo, se puede expandir solo el paso actual sin cambiar la estructura.
   - Skills: `copy-editing` y `copywriting` para los textos, y `accessibility` para la lista ordenada y los encabezados de cada paso.
4. **Contacto:** campos con borde, radio y foco turquesa; chips de motivo como `ControlSegmentado` o pastillas; el sello terracota pasa a botón principal turquesa; `SobreEnviado` y `ContactoDirecto` con las primitivas nuevas. La lógica del formulario y Netlify Forms no cambia.

- Skills por vista: `frontend-design` antes; `copy-editing` si cambian títulos o textos de `data/idiomas`; `cro` después de Contacto y de los CTAs de Trabajo.

#### Etapa 4, segunda parte: separar Trabajo en Experiencia y Proyectos

Estado: pendiente. Se ejecuta antes de la Etapa 7, que debe auditar la estructura definitiva.

**Por qué va acá.** Es una reorganización de vistas y contenido, el mismo alcance de la Etapa 4. No justifica una etapa nueva. Las Etapas 5 (modo noche) y 6 (limpieza) ya están hechas, así que sus controles se repiten dentro de esta parte para lo nuevo: revisar de noche las dos vistas y borrar lo que quede de Trabajo.

**Objetivo.** Reemplazar la sección Trabajo por dos secciones:
- **Experiencia:** áreas de trabajo profesional, con lo que hice, los problemas que resolví y las tecnologías usadas. Sin las tarjetas con imagen.
- **Proyectos:** desarrollos propios, freelance, aplicaciones funcionales y proyectos de formación relevantes. Conserva las tarjetas con imagen actuales (`CartaTrabajo`, `MarcoImagen`) y la ficha de detalle.

Navegación nueva, en este orden: Sobre mí, Tecnologías, Experiencia, Proyectos, Contacto.

**Áreas iniciales de Experiencia** (punto de partida, a revisar antes de implementar):
1. Integraciones y sistemas e-commerce: pasarelas de pago, personalización de checkout, automatizaciones y funcionalidades comerciales.
2. Autenticación, roles y permisos: RBAC, autenticación con JWT, protección de endpoints y control de permisos.
3. Automatización y sistemas con IA: funcionalidades para plataformas de reclutamiento, integración de servicios externos, automatización de procesos y migración de flujos a código.

**Pasos.**
1. **Contenido primero** (`copywriting`, modo A: armar textos solo con datos confirmados):
   - redactar cada área (qué hice, qué problema resolví, tecnologías clave) en ES y EN;
   - definir qué entra en Proyectos;
   - escribir las descripciones nuevas del menú de Inicio y los textos de navegación.
2. **Diseño de Experiencia** (`frontend-design`): elegir una de las opciones de abajo con wireframes y validarla antes de escribir código.
3. **Datos y rutas** (`composition-patterns`, `react-best-practices`):
   - separar `data/trabajo.ts` en datos de proyectos y de experiencia;
   - separar `textos.trabajo` en ES y EN;
   - rutas `/experiencia`, `/proyectos` y `/proyectos/:slug`, con redirecciones desde `/trabajo` y `/trabajo/:slug` para no romper enlaces ya compartidos;
   - pasar `TrabajoDetalle` a ficha de proyecto.
4. **Componentes:**
   - un componente nuevo para las áreas de Experiencia, sin reutilizar las cartas;
   - reutilizar `ListaTecnologias` o una variante más compacta para las tecnologías de cada área;
   - las cartas y la ficha pasan a Proyectos sin cambiar su estética.
5. **Navegación:**
   - 5 entradas en `data/navegacion.ts`, la barra y el `MenuJuego` de Inicio, que crece una opción;
   - un icono máscara nuevo para Proyectos, con el trazo 12×12 de los demás; el maletín queda para Experiencia;
   - recalcular el corte de 960px de la barra con 5 entradas en ES y EN.
6. **Controles de las Etapas 5 y 6:** capturas de día y noche, celular, ES y EN; borrar textos, tipos (`experiencia` e `implementacion` en `TipoTrabajo`), slugs y estilos de Trabajo que queden sin uso.
7. **Documentación:** secciones en `PRODUCT.md`, rutas en `portfolio-workflow`, componente nuevo en `DESIGN.md` y `.claude/product-marketing.md`.

**Qué afecta de lo ya hecho.**
- Inicio cambia de contenido (5 opciones en lugar de 4), aunque no de estilo; revisar el alto en pantallas bajas (regla `max-height: 760px` de `Inicio.css`).
- La barra superior suma una entrada y puede necesitar un corte mayor que 960px.
- Las fichas `/trabajo/integraciones-pago` y `/trabajo/control-acceso-roles` dejan de existir como proyectos: su contenido pasa a las áreas de Experiencia y sus URLs redirigen a `/experiencia`.
- El vínculo `parteDe` entre RBAC y el sistema de salones ("Incluye: Control de acceso por roles") se rompe; hay que decidir qué queda en la ficha del salón.
- El recorrido de Sobre mí ya lista logros por puesto; Experiencia debe complementarlo (por área) sin repetir las mismas viñetas.
- La Etapa 7 se mantiene igual, pero se ejecuta después de esta parte.

**Opciones de diseño para Experiencia** (decidir antes de implementar):

```
A. Lista de áreas abiertas (recomendada)
┌───────────────────────────────────────────────┐
│ Experiencia                                   │
│ ┌───────────────────────────────────────────┐ │
│ │ [▣] Integraciones y sistemas e-commerce   │ │
│ │ Problema: … (una línea)                   │ │
│ │ ■ Integré …  ■ Personalicé …  ■ Automat…  │ │
│ │ PHP · MySQL · OpenCart · REST             │ │
│ └───────────────────────────────────────────┘ │
│ ┌──── Autenticación, roles y permisos ──────┐ │
│ └───────────────────────────────────────────┘ │
└───────────────────────────────────────────────┘

B. Maestro-detalle, como Tecnologías
┌──────────────┐ ┌─────────────────────────────┐
│ ▶ [▣] E-com. │ │ Integraciones y e-commerce  │
│   [▣] Auth   │ │ Problema / Qué hice / Stack │
│   [▣] IA     │ │                             │
└──────────────┘ └─────────────────────────────┘

C. Acordeón con cursor pixel
▶ Integraciones y sistemas e-commerce        [−]
    Problema · Qué hice · Stack
  Autenticación, roles y permisos            [+]
  Automatización y sistemas con IA           [+]
```

- **A** muestra todo sin clics: lo más rápido de escanear para un reclutador, y con tres áreas no queda largo.
- **B** reutiliza un patrón ya existente, pero esconde dos de las tres áreas detrás de clics.
- **C** es compacta, pero también esconde contenido y suma una interacción más que probar.

**Decisiones a resolver al llegar a esta parte.**

*Contenido*
1. **Empresas:** ¿Experiencia nombra empresas, o solo áreas? Si no las nombra, ¿se mantiene WAIA en el recorrido de Sobre mí y en el texto de contexto actual? Conviene una sola política para todo el sitio.
2. **RBAC:** ¿el área "Autenticación, roles y permisos" sale del trabajo profesional actual, del sistema de salones o de ambos? ¿La ficha del salón conserva la mención a RBAC como funcionalidad propia?
3. **Plataformas de reclutamiento y migración de flujos a código:** confirmar que mencionarlo no expone información del contrato actual. Hoy solo se nombra el rubro "automatización con IA".
4. **Problemas resueltos:** qué problema concreto describe cada área, sin métricas inventadas; si no hay datos, se describe el problema sin cifras.
5. **Proyectos:** ¿el sistema de salones (en desarrollo y sin captura) se muestra ya, o cuando tenga imagen? ¿Hace falta un tipo nuevo "Freelance" en las etiquetas, con su color?
6. **Textos de Inicio:** descripciones de las dos opciones nuevas del menú (hoy Trabajo dice "Proyectos y experiencia").

*Diseño*
7. Opción A, B o C para Experiencia.
8. Cuánta información de tecnologías mostrar por área (pocas, sin repetir la sección Tecnologías): solo nombres o con sprites de 24px.
9. Icono pixel para Proyectos (ventana, carpeta o pantalla con código).
10. Si `CartaTrabajo` y la ficha se renombran (por ejemplo `CartaProyecto`) para que el código refleje la sección nueva.
11. Llamado a la acción al final de Experiencia hacia Contacto (`cro`).

**Skills.** Antes: `copywriting`, `frontend-design`, `composition-patterns`. Después: `web-design-guidelines`, `accessibility`, `webapp-testing` (capturas y redirecciones), `cro`.

### Etapa 5: modo noche

Estado: hecha. Se revisaron de noche todas las rutas en escritorio y celular, las seis categorías de Tecnologías, una ficha completa, el menú móvil abierto y el foco con teclado en controles, pestañas y campos. Hallazgo corregido: los sprites con cuerpo aubergine (terminal, MySQL, PostgreSQL, OpenCart, Antigravity) se perdían sobre las baldosas oscuras; se agregó `--contorno-sprite` (contorno claro de 1px solo de noche). La ficha "Integraciones de pago" pasó a "Desarrolladora Full Stack", coherente con el recorrido.

Agregado a pedido de Camila: selector de tema con tres opciones (Sistema, Claro, Oscuro) como menú desplegable (`SelectorTema`), preferencia sincronizada entre pestañas del navegador, script en `index.html` que aplica el tema antes de pintar y `body` con `--color-fondo`. El reporte "al cambiar de pestaña vuelve a oscuro" no se reprodujo con una sola pestaña; la causa probable era tener dos pestañas abiertas (no se sincronizaban) o el destello madera de `body` antes de cargar React. Ambas quedan resueltas.

- Recorrer todas las vistas en tema noche; el sistema viejo no tenía variante y es donde más regresiones puede haber.
- Skills: `accessibility` (contraste en ambos temas).

### Etapa 6: limpieza

Estado: hecha.
- `global.css` sin el bloque de tokens viejos ni el puente de alias; `body` con Onest a 17px; barra de desplazamiento, selección y foco global con los tokens nuevos; sin la clase `.titulo`.
- Borrados: `FondoEscena`, `data/ambientes.ts`, `public/ambientes`, `scripts/ambientes`, `ventana.png`, `ventana-oscura.png`, `cursor.png`, `mapa-recorrido.png`, `parada-*.png`, `red-email.png` y `hoja-sello.png`.
- `index.html`: sin Jersey 20, favicon nuevo (`public/favicon.svg`: baldosa turquesa con el cursor pixel) y `theme-color` para claro y oscuro.
- Verificado: búsqueda sin referencias a tokens ni archivos borrados, compilación limpia y capturas de todas las vistas.

- Borrar el primer bloque `:root` de `global.css`, `.titulo` y los estilos de `body` heredados (madera, Jersey 20, `pixelated`, scrollbar y selección terracota/oro); pasar `body` a `--color-fondo`, `--color-texto` y Onest.
- Borrar `FondoEscena`, `data/ambientes.ts`, `public/ambientes`, `scripts/ambientes`, `ventana.png`, `ventana-oscura.png`, `cursor.png`, `mapa-recorrido.png`, `parada-*.png`, `faroles` en `data/navegacion.ts`, `MapaRecorrido`, y `Boton`/`FilaMenu`/`IconosContacto` si quedaron reemplazados.
- Quitar Jersey 20 de la carga de Google Fonts en `index.html`.
- Reemplazar el favicon `hoja-sello.png` por uno del sistema nuevo, por ejemplo la "C" de ChamDev en Jersey 25 o el cursor pixel turquesa, y borrar la hoja.
- Verificar con búsqueda que no queden referencias a `--papel`, `--madera`, `--fuente-texto`, `--fuente-titulo`, `--marco-*` ni `--cursor`.

### Etapa 7: verificación final

Estado: pendiente. Se ejecuta después de la segunda parte de la Etapa 4 (Experiencia y Proyectos), para auditar la estructura definitiva; la revisión de CLS de imágenes aplica a Proyectos.

- `webapp-testing`: capturas de cada ruta a 375px y 1280px, en día y noche, comparadas con Inicio.
- `web-design-guidelines` sobre los archivos tocados.
- `accessibility`: foco visible, jerarquía de headings, teclado en navbar, tabs, mapa y formulario.
- `react-best-practices` en modo revisión.
- `core-web-vitals` / `performance`: sin los PNG de escena debería mejorar el LCP; revisar CLS de imágenes de Trabajo.
- `cro`: que desde cualquier vista se llegue a Contacto con la misma claridad que desde Inicio.

## 4. Revisión de los textos del recorrido

Fuente: `paradas` en `src/data/idiomas/es.ts` (y su espejo en `en.ts`). Cada paso tiene `etiqueta`, `nombre`, `titulo` y `lugar`, pero cada campo se completa con un criterio distinto en cada paso.

### Estado actual

| Paso | `etiqueta` | `nombre` | `titulo` | `lugar` |
|---|---|---|---|---|
| inicios | 2022 | Primeros pasos *(etapa)* | Programación desde 0 *(curso)* | Egg · 2022 |
| fullStack | 2023 | Full Stack *(área)* | Full Stack Developer *(puesto, en inglés)* | Egg Live · Diciembre de 2023 |
| desarrolloWeb | **Curso** *(no es fecha)* | PHP *(tecnología)* | Desarrollo Web Completo *(curso)* | Udemy, con Juan Pablo De la Torre Valdez *(sin fecha)* |
| waia | 2024 – 2026 | WAIA *(empresa)* | Full Stack Developer *(puesto, en inglés)* | WAIA · Marzo de 2024 – julio de 2026 |
| ciberseguridad | 2025 | Ciberseguridad *(área)* | Arquitectura en Ciberseguridad *(carrera)* | Educación IT · Carrera en curso |
| actual | **Hoy** *(no es fecha)* | Backend *(área)* | Desarrolladora Backend *(puesto, en español)* | Startup de automatización con IA · Desde septiembre de 2026 |

### Problemas

1. **`etiqueta` mezcla años, rangos y palabras:** "Curso" y "Hoy" no son fechas.
2. **`nombre` no tiene un criterio único:** hay una etapa, áreas, una tecnología y una empresa.
3. **`titulo` mezcla cursos y puestos:** "Full Stack Developer" aparece dos veces con sentidos distintos (el programa de Egg y el puesto en WAIA).
4. **Idioma y género inconsistentes en los puestos:** "Full Stack Developer" (inglés) frente a "Desarrolladora Backend" (español, en femenino).
5. **La fecha se repite:** está en `etiqueta` y otra vez en `lugar`, con formatos distintos ("2022", "Diciembre de 2023", "Marzo de 2024 – julio de 2026", "Carrera en curso").
6. **La voz de los textos cambia:** algunos empiezan como ficha ("Curso de introducción…", "Programa intensivo…", "Formación orientada…") y otros en primera persona ("Trabajo en una startup…"). El paso actual es un único párrafo muy largo, y WAIA es el único con logros.

### Propuesta de esquema

Con la línea de tiempo ya no hace falta un nombre corto para el mapa, así que `nombre` y `etiqueta` se reemplazan por una fecha.

| Campo | Criterio |
|---|---|
| `fecha` | Siempre un período en el mismo formato: año (`2022`), rango (`2024 – 2026`) o abierto (`2025 – actualidad`, `Desde 2026`). |
| `titulo` | En **formación**, el nombre oficial del curso o programa. En **experiencia**, el puesto en español y en femenino. |
| `lugar` | Solo la institución o la empresa, sin fecha. |
| `tipo` | Experiencia o Formación, mostrado como pastilla. |
| `parrafos` | En primera persona, uno o dos párrafos cortos: qué hice o aprendí y para qué me sirvió. |
| `logros` | Opcional, en viñetas que empiezan con un verbo en pasado. Conviene usarlos también en el paso actual, partiendo el párrafo largo. |

### Borrador de títulos (sin inventar datos)

| Paso | `fecha` | `titulo` | `lugar` |
|---|---|---|---|
| inicios | 2022 | Programación desde cero Latam | Egg |
| fullStack | 2023 | Full Stack Latam | Egg Live |
| desarrolloWeb | 2023 | Desarrollo Web Completo | Udemy |
| waia | 2024 – 2026 | Desarrolladora Full Stack | WAIA |
| ciberseguridad | 2025 – actualidad | Arquitectura en Ciberseguridad | Educación IT |
| actual | Desde 2026 | Desarrolladora Backend | Startup de automatización con IA |

- El instructor de Udemy puede pasar al texto si se quiere conservar, en lugar de ir en `lugar`.
- El orden queda cronológico por fecha de inicio. Full Stack Latam y Desarrollo Web Completo comparten el año 2023: se mantiene el orden actual, porque el curso de Udemy se interrumpió con el ingreso a WAIA en marzo de 2024. Ciberseguridad (2025) se superpone con WAIA (2024 – 2026). Eso es correcto y la línea de tiempo lo muestra sin problema.
- El nombre de la empresa actual queda sin publicar hasta que Camila revise las condiciones de su contrato. El rubro sí se puede mostrar. El campo `lugar` admite el nombre real más adelante sin cambiar el diseño.
- `en.ts` se reescribe con el mismo esquema una vez que se aprueben los textos en español.

## 5. Riesgos

- `CartaContacto.css` (292 líneas) se armó en el mismo commit que el Inicio nuevo pero con el estilo viejo: es la pieza más grande de migrar.
- La línea de tiempo depende de que se aprueben los textos de la sección 4: conviene cerrar el contenido antes de diseñar el componente.
- `farolSinImagen` se usa como imagen de respaldo en Trabajo; si se borran los sprites de faroles antes de reemplazarlo, se rompen las cartas sin captura.
- Mientras convivan tokens viejos y nuevos (Etapas 1–5) puede haber vistas mixtas; conviene migrar el shell (Etapa 2) y las primitivas (Etapa 3) antes de tocar cada vista.
