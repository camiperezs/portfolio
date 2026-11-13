# Plan de actualización de ChamDev

Aprobado por Camila el 2026-11-13. Reemplaza el posicionamiento Backend por Full Stack, suma los servicios freelance y reordena el sitio para reclutadores y clientes.

## Posicionamiento

- Rol de marca: **Desarrolladora Full Stack**. En Unio el puesto sigue siendo **Desarrolladora Backend**.
- Línea de valor: «Desarrollo soluciones web a medida: sitios, integraciones, automatizaciones y sistemas de gestión.»
- El interés por el backend se demuestra en Sobre mí y en Experiencia, no en el título.
- Modalidad de trabajo: remota.
- Acción principal en todo el sitio: «Escribime». La secundaria cambia según la sección.

## Arquitectura

| Sección | Función |
|---|---|
| Inicio | Rol, línea de valor y menú de cuatro opciones |
| Servicios | Cinco servicios con jerarquía, modalidades del servicio web, «Cómo trabajo» y «Próximamente» |
| Experiencia | Pestañas por empresa: Unio y WAIA |
| Sobre mí | Presentación, retrato y trayectoria (experiencia y formación) |
| Contacto | Formulario en dos pasos y a dos columnas |

- Tecnologías se elimina: cada tecnología se muestra donde se usó.
- Proyectos sale del menú hasta que haya landing pages publicadas. Festival y Frontend Store se quitan.
- Las URLs quedan en español por ahora; más adelante se revisa que sean más amigables.
- No hay CV descargable.

## Servicios

1. **Landing pages y sitios web** (principal), con dos modalidades en un control segmentado: «Tengo una idea» y «Ya tengo un diseño».
2. **Integraciones y APIs** y **Automatizaciones** (destacados).
3. **Sistemas de gestión** y **Mantenimiento web** (complementarios).

Cada servicio indica su respaldo real (experiencia en Unio o WAIA, o proyecto propio). Debajo del servicio web, una línea opcional: «Este sitio lo diseñé y desarrollé yo».

«Cómo trabajo»: escucho, analizo, propongo, desarrollo y pruebo, publico y acompaño. No todos los proyectos pasan por todas las etapas.

«Próximamente»: Gestor para centros de estética (el actual sistema de salones), con invitación a centros de estética y peluquerías a escribir. Sin fechas ni demo prometida. La ficha detallada se conserva.

## Experiencia

- **Unio · Desarrolladora Backend · sept. 2026 – actualidad.** Node.js, Fastify, PostgreSQL, Redis, AWS Lambda, API Gateway y n8n. Análisis de requerimientos, propuesta e implementación; APIs y lógica de negocio; autenticación y roles con JWT; serverless; automatizaciones, integraciones y migración de flujos a código; cambios de base de datos probados en local y coordinados con el equipo; frontend ocasional. Sin datos internos ni capturas.
- **WAIA · Desarrolladora Full Stack · mar. 2024 – jul. 2026.** PHP, MySQL, OpenCart, JavaScript, REST APIs, OAuth y Docker. Sin GOcuotas.

## Sobre mí

Presentación sin «vivo en Rosario»: resolver problemas completos; hoy en Unio y freelance en modalidad remota; al final, el interés por el backend (APIs, integraciones, bases de datos y automatizaciones). La carta del retrato muestra «Trabajo remoto». Formación: Educación IT (2025 – actualidad) y Egg Live · Udemy (2023).

## Contacto

Dos columnas. A la izquierda, «¿Qué tenés en mente?», una línea de apoyo y el contacto directo (email con copiar, LinkedIn y GitHub). A la derecha, una tarjeta en dos pasos: primero el motivo con el menú de juego y el cursor pixel (proyecto freelance, propuesta laboral, gestor para centros de estética, otra consulta), después nombre, email y mensaje. Barra de progreso pixelada en acento. Si se llega desde una sección con motivo, arranca en el paso 2. En móvil se apila. Se diseña con mockup antes de implementar.

## Orden de trabajo

| # | Tarea | Tipo | Esfuerzo |
|---|---|---|---|
| 1 | Renombrar el código al inglés, sin cambios visibles | Refactor | L |
| 2 | Rol, línea de valor, Sobre mí, Unio y trayectoria, en ES y EN | Contenido | S |
| 3 | Experiencia por empresa y menú de cuatro secciones, con redirecciones | Estructura | M |
| 4 | Servicios con «Cómo trabajo» y «Próximamente» | Estructura | L |
| 5 | Contacto: mockup, aprobación e implementación | Estructura | L |
| 6 | PRODUCT.md, DESIGN.md y limpieza de lo que quede sin uso | Documentación | S |
| 7 | CV en PDF (fuera del sitio): Full Stack, Unio y fechas | Fuera del sitio | S |

### Alcance del renombre

Pasan al inglés los archivos, carpetas, componentes, variables, claves de datos, clases CSS, tokens, sprites y los campos del formulario de Netlify (`name`, `email`, `phone`, `reason`, `message`, `bot-field`). Se mantienen en español el contenido visible, las URLs y el nombre del formulario de Netlify (`contacto`), para no romper las notificaciones configuradas. La preferencia de tema se guarda ahora como `theme` con los valores `light` y `dark`, así que quien ya había elegido un tema vuelve al del sistema una única vez.

## Validación

- En cinco segundos, Inicio se entiende como «Full Stack que hace soluciones web».
- El backend se ve en Sobre mí y en Unio.
- Las tecnologías de Unio coinciden con las confirmadas, y cada servicio tiene su respaldo real.
- No hay clientes, métricas ni testimonios inventados.
- Desde Inicio se llega a cualquier sección en un clic.
- Navegación con teclado, contraste AA en día y noche, sin scroll horizontal a 360px y el inglés a la par del español.
