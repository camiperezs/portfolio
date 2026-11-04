import { certificados } from '../sobreMi'
import type { IdParada, TextoParada } from '../sobreMi'
import type { IdCategoria } from '../tecnologias'
import type { IdTrabajo, TextoTrabajo } from '../trabajo'

const trabajos: Record<IdTrabajo, TextoTrabajo> = {
  sistemaSalon: {
    titulo: 'Sistema de gestión para salones de belleza',
    rol: 'Desarrolladora Full Stack · Responsable del proyecto',
    resumen:
      'Aplicación web full stack pensada para simplificar la operación diaria de salones de belleza y profesionales independientes.',
    lista: {
      titulo: 'Funcionalidades principales',
      items: [
        'Agenda de turnos y gestión de disponibilidad.',
        'Gestión de clientes, servicios y profesionales.',
        'Reservas de varios servicios con seguimiento de estado.',
        'Precios, señas e intervalos de regreso sugeridos.',
        'Autenticación y control de acceso por roles.',
      ],
    },
    contexto:
      'Desarrollado de forma independiente, desde el diseño de la base de datos y las APIs REST hasta la implementación del frontend. Actualmente en desarrollo.',
  },
  integracionesPago: {
    titulo: 'Integraciones de pago para e-commerce',
    rol: 'Desarrolladora Backend · Integraciones de pago',
    resumen:
      'Desarrollo, mantenimiento y mejora de integraciones de pago para plataformas de e-commerce en producción.',
    lista: {
      titulo: 'Qué hice',
      items: [
        'Integré Mercado Pago, MODO y GOcuotas.',
        'Desarrollé y mantuve la funcionalidad de las pasarelas de pago.',
        'Trabajé con APIs REST y servicios externos.',
        'Adapté los flujos de checkout y pago a los requisitos del negocio.',
        'Resolví problemas de pagos y mejoré integraciones existentes.',
      ],
    },
    contexto: 'Trabajo realizado en WAIA, manteniendo y mejorando aplicaciones de e-commerce reales.',
  },
  rbac: {
    titulo: 'Control de acceso por roles (RBAC)',
    rol: 'Desarrolladora Backend · Autenticación y autorización',
    resumen:
      'Autenticación y autorización por roles en una aplicación full stack de gestión para salones de belleza, con distintos niveles de acceso según las responsabilidades de cada usuario.',
    desafio:
      'Cada usuario necesita acceder a funciones e información distintas: la administración configura el sistema, recepción gestiona turnos y clientes, y cada profesional accede a lo relativo a su propio trabajo. La aplicación necesitaba un modelo de seguridad centralizado que aplicara esas restricciones de forma consistente.',
    lista: {
      titulo: 'Qué implementé',
      items: [
        'Autenticación con JSON Web Tokens (JWT) y contraseñas protegidas con BCrypt, integradas con Spring Security.',
        'Tres roles: ADMIN, RECEPTIONIST y PROFESSIONAL.',
        'Autorización por rol en las operaciones protegidas del backend.',
        'Restricciones según la identidad del usuario y la propiedad de cada recurso.',
        'Validación de permisos antes de cada operación protegida, con una arquitectura sin estado.',
        'Separación entre la autenticación y la lógica de negocio.',
      ],
    },
    contexto:
      'Diseñé e implementé de forma independiente la arquitectura de autenticación y autorización, con foco en la mantenibilidad, la separación de responsabilidades y la protección de los recursos frente a accesos no autorizados.',
  },
  festival: {
    titulo: 'Rock & EDM Festival',
    resumen: 'Proyecto frontend con temática de festival, con información del line up, galería y entradas.',
  },
  frontendStore: {
    titulo: 'Frontend Store',
    resumen: 'Simulación de una tienda de remeras con secciones de tienda, nosotros y descripción de producto.',
  },
}

const paradas: Record<IdParada, TextoParada> = {
  inicios: {
    etiqueta: '2022',
    nombre: 'Primeros pasos',
    titulo: 'Programación desde 0',
    lugar: 'Egg · 2022',
    parrafos: [
      'Curso de introducción a la programación a través de la herramienta PSeInt, un software de código abierto para estudiantes, donde aprendí sobre lógica de programación y escribí mis primeros algoritmos.',
    ],
  },
  fullStack: {
    etiqueta: '2023',
    nombre: 'Full Stack',
    titulo: 'Full Stack Developer',
    lugar: 'Egg Live · Diciembre de 2023',
    parrafos: [
      'Programa intensivo de formación en desarrollo Full Stack, con práctica en tecnologías frontend y backend, bases de datos y desarrollo de APIs REST.',
      'Durante la cursada trabajé en equipo con estudiantes de distintos países de Latinoamérica, participando en actividades y proyectos colaborativos.',
    ],
    enlaces: [{ texto: 'Ver certificado', url: certificados.fullStack }],
  },
  desarrolloWeb: {
    etiqueta: 'Curso',
    nombre: 'PHP',
    titulo: 'Desarrollo Web Completo',
    lugar: 'Udemy, con Juan Pablo De la Torre Valdez',
    parrafos: [
      'Formación práctica en desarrollo web, con contenidos de HTML, CSS, Sass, JavaScript, PHP, programación orientada a objetos, MVC, MySQL e integración de APIs.',
      'Durante esta etapa desarrollé mis primeros proyectos personales y profundicé mis conocimientos de PHP. Interrumpí el curso al incorporarme a mi primer empleo como desarrolladora.',
    ],
  },
  waia: {
    etiqueta: '2024 – 2026',
    nombre: 'WAIA',
    titulo: 'Full Stack Developer',
    lugar: 'WAIA · Marzo de 2024 – julio de 2026',
    parrafos: ['Desarrollé funcionalidades para tiendas OpenCart en producción con PHP y MySQL.'],
    logros: [
      'Integré pagos con Mercado Pago y MODO mediante APIs REST, OAuth y webhooks.',
      'Implementé reglas de negocio para promociones, descuentos y gift cards.',
      'Automaticé procesos y reportes.',
      'Relevé requerimientos directamente con clientes.',
    ],
  },
  ciberseguridad: {
    etiqueta: '2025',
    nombre: 'Ciberseguridad',
    titulo: 'Arquitectura en Ciberseguridad',
    lugar: 'Educación IT · Carrera en curso',
    parrafos: [
      'Formación orientada a comprender los fundamentos de seguridad informática, redes y sistemas Linux, incorporando conceptos de desarrollo seguro y prácticas de DevSecOps.',
      'Completé Introducción a la Ciberseguridad y continué explorando áreas como seguridad de redes, administración de sistemas Linux y desarrollo seguro.',
    ],
    enlaces: [
      { texto: 'Ver certificado de Introducción a la Ciberseguridad', url: certificados.introduccionCiberseguridad },
    ],
  },
  actual: {
    etiqueta: 'Hoy',
    nombre: 'Backend',
    titulo: 'Desarrolladora Backend',
    lugar: 'Startup de automatización con IA · Desde septiembre de 2026',
    parrafos: [
      'Trabajo en una startup que usa IA para automatizar procesos y reducir tareas manuales. Desarrollo servicios con Node.js y Fastify, sobre PostgreSQL y Redis. Implemento autenticación JWT, control de roles y permisos, funciones en AWS Lambda y API Gateway, además de integraciones con servicios externos y automatizaciones. En paralelo, profundizo en Java y Spring Boot.',
    ],
  },
}

const categorias: Record<IdCategoria, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  'bases-de-datos': 'Bases de datos',
  'e-commerce': 'E‑commerce',
  herramientas: 'Herramientas',
  ia: 'IA',
}

export const es = {
  rol: 'Desarrolladora Backend',
  idioma: 'Idioma',
  modoNoche: 'Modo noche',
  pendiente: 'Esta sección se construye en el próximo paso.',
  navegacion: {
    etiqueta: 'Secciones',
    menu: 'Menú',
    sobreMi: 'Sobre mí',
    tecnologias: 'Tecnologías',
    trabajo: 'Trabajo',
    contacto: 'Contacto',
  },
  inicio: {
    menu: 'Principal',
    redes: 'Perfiles profesionales',
    abrir: 'Abrir rollo',
    cerrar: 'Cerrar rollo',
  },
  sobreMi: {
    titulo: 'Sobre mí',
    secciones: 'Secciones de Sobre mí',
    pestanas: { perfil: 'Perfil', recorrido: 'Recorrido' },
    retrato: 'Retrato pixel art de',
    contacto: 'Enlaces de contacto',
    perfil: [
      'Soy desarrolladora de software con orientación al backend. Me interesa trabajar en la estructura y lógica que hacen funcionar una aplicación, desde el modelado de datos hasta la integración de servicios.',
      'Disfruto especialmente la etapa de análisis y diseño, donde puedo evaluar diferentes enfoques y transformar requerimientos en soluciones técnicas. Mi experiencia en frontend complementa esta perspectiva y me permite abordar proyectos web de manera integral.',
    ],
    recorrido: {
      etiqueta: 'Paradas del recorrido',
      tipos: { experiencia: 'Experiencia', formacion: 'Formación' },
      anterior: 'Parada anterior',
      siguiente: 'Parada siguiente',
      paradas,
    },
  },
  tecnologias: {
    titulo: 'Tecnologías',
    etiqueta: 'Categorías de tecnologías',
    categorias,
  },
  trabajo: {
    titulo: 'Trabajo',
    etiqueta: 'Proyectos y experiencia',
    volver: 'Volver a Trabajo',
    verFicha: 'Ver ficha',
    rol: 'Rol',
    desafio: 'El desafío',
    contexto: 'Contexto',
    tecnologias: 'Tecnologías',
    verSitio: 'Ver sitio publicado',
    parteDe: 'Parte de',
    incluye: 'Incluye',
    imagenDe: 'Captura de',
    tipos: {
      proyecto: 'Proyecto propio',
      experiencia: 'Experiencia laboral',
      implementacion: 'Implementación',
      formacion: 'Formación',
    },
    estados: { desarrollo: 'En desarrollo', produccion: 'En producción', publicado: 'Publicado' },
    items: trabajos,
  },
  contacto: { titulo: 'Contacto' },
}

export type Textos = typeof es
