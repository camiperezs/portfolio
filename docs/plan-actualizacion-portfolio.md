# Plan de actualización de ChamDev

Aprobado por Camila el 2026-11-13 y actualizado al cerrar la tarea 6. Reemplaza el posicionamiento Backend por Full Stack, suma los servicios freelance y reordena el sitio para reclutadores y clientes. El detalle visual está en `DESIGN.md` y el de producto en `PRODUCT.md`.

## Posicionamiento

- Rol de marca: **Desarrolladora Full Stack**. En Unio el puesto sigue siendo **Desarrolladora Backend**.
- Línea de valor: «Desarrollo soluciones web a medida: sitios, integraciones y automatizaciones.»
- El interés por el backend se demuestra en Experiencia, no en el título.
- Modalidad de trabajo: remota.
- Acción principal en todo el sitio: «Escribime».

## Arquitectura final

| Sección | Contenido |
|---|---|
| Inicio | Rol, línea de valor y menú con las cinco secciones |
| Servicios | Servicio principal con dos modalidades, cuatro secundarios enlazados a Contacto y un cierre |
| Proyectos | Gestor para centros de estética (en desarrollo) |
| Experiencia | Pestañas por empresa: Unio y WAIA |
| Sobre mí | Presentación, retrato y trayectoria |
| Contacto | Formulario en dos pasos y contacto directo |

- Tecnologías se eliminó; `/tecnologias` redirige a Experiencia.
- Festival y Frontend Store se quitaron; sus direcciones redirigen a Proyectos.
- Las URLs quedan en español por ahora.
- No hay CV descargable.

## Servicios

**Landing pages y sitios web** (principal): «Diseño y desarrollo web para profesionales, negocios y emprendimientos.» Modalidades «01 Diseño y desarrollo» y «02 Implementación», y al pie «Ambas modalidades incluyen adaptación responsive, pruebas y publicación.»

**Secundarios:** Integraciones, Automatizaciones, Nuevas funcionalidades para tu sistema, y Soporte y correcciones. Cada uno con descripción y ejemplos, sin precios.

**Cierre:** «¿Tenés un proyecto en mente?» con el botón «Escribime».

## Experiencia

- **Unio · Desarrolladora Backend · sept. 2026 – actualidad.** Node.js, Fastify, PostgreSQL, Redis, AWS Lambda, API Gateway y n8n.
- **WAIA · Desarrolladora Full Stack · mar. 2024 – jul. 2026.** PHP, MySQL, OpenCart, JavaScript, REST APIs, OAuth y Docker.

## Contacto

Paso 1: elegir el motivo (proyecto freelance, propuesta laboral, gestor para centros de estética u otra consulta). Paso 2: nombre, email y mensaje con etiquetas flotantes. Desde Servicios se llega directo al paso 2 con el motivo y el servicio elegidos.

## Estado

| # | Tarea | Estado |
|---|---|---|
| 1 | Renombrar el código al inglés | Hecha |
| 2 | Rol, línea de valor, Sobre mí, Unio y trayectoria | Hecha |
| 3 | Experiencia por empresa | Hecha |
| 4 | Servicios y menú | Hecha |
| 5 | Contacto | Hecha |
| 6 | Documentación y limpieza | Hecha |
| 7 | CV en PDF | Descartada: el CV no se toca |

## Pendiente

- Captura del gestor en `public/img/gestor-estetica.webp`, para Proyectos y la ficha.
- Decidir si la ficha del gestor conserva el cierre «¿Tenés un proyecto en mente?».
- Publicar: pasar `develop` a `main`.
- Revisar URLs más amigables.

## Validación

- En cinco segundos, Inicio se entiende como «Full Stack que hace soluciones web».
- El backend se ve en Experiencia.
- Las tecnologías de Unio coinciden con las confirmadas.
- No hay clientes, métricas ni testimonios inventados.
- Desde Inicio se llega a cualquier sección en un clic.
- Navegación con teclado, contraste AA en día y noche, sin scroll horizontal a 360px y el inglés a la par del español.
