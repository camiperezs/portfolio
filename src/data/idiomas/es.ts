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
    fecha: '2022',
    titulo: 'Programación desde cero Latam',
    lugar: 'Egg',
    parrafos: [
      'Aprendí lógica de programación con PSeInt, un software de código abierto para estudiantes, y escribí mis primeros algoritmos.',
    ],
  },
  fullStack: {
    fecha: '2023',
    titulo: 'Full Stack Latam',
    lugar: 'Egg Live',
    parrafos: [
      'Cursé un programa intensivo de desarrollo Full Stack, con práctica en frontend y backend, bases de datos y desarrollo de APIs REST.',
      'Trabajé en equipo con estudiantes de distintos países de Latinoamérica en actividades y proyectos colaborativos.',
    ],
    enlaces: [{ texto: 'Ver certificado', url: certificados.fullStack }],
  },
  desarrolloWeb: {
    fecha: '2023',
    titulo: 'Desarrollo Web Completo',
    lugar: 'Udemy',
    parrafos: [
      'Hice el curso de Juan Pablo De la Torre Valdez, con HTML, CSS, Sass, JavaScript, PHP, programación orientada a objetos, MVC, MySQL e integración de APIs.',
      'En esta etapa desarrollé mis primeros proyectos personales y profundicé en PHP. Dejé el curso al incorporarme a mi primer empleo como desarrolladora.',
    ],
  },
  waia: {
    fecha: '2024 – 2026',
    titulo: 'Desarrolladora Full Stack',
    lugar: 'WAIA',
    parrafos: ['Desarrollé funcionalidades para tiendas OpenCart en producción con PHP y MySQL.'],
    logros: [
      'Integré pagos con Mercado Pago y MODO mediante APIs REST, OAuth y webhooks.',
      'Implementé reglas de negocio para promociones, descuentos y gift cards.',
      'Automaticé procesos y reportes.',
      'Relevé requerimientos directamente con clientes.',
    ],
  },
  ciberseguridad: {
    fecha: '2025 – actualidad',
    titulo: 'Arquitectura en Ciberseguridad',
    lugar: 'Educación IT',
    parrafos: [
      'Estudio los fundamentos de seguridad informática, redes y sistemas Linux, junto con desarrollo seguro y prácticas de DevSecOps.',
      'Completé Introducción a la Ciberseguridad y sigo con seguridad de redes, administración de sistemas Linux y desarrollo seguro.',
    ],
    enlaces: [
      { texto: 'Ver certificado de Introducción a la Ciberseguridad', url: certificados.introduccionCiberseguridad },
    ],
  },
  actual: {
    fecha: '2026 – actualidad',
    titulo: 'Desarrolladora Backend',
    lugar: 'Startup de automatización con IA',
    parrafos: [
      'Trabajo en una startup que usa IA para automatizar procesos y reducir tareas manuales. En paralelo, profundizo en Java y Spring Boot.',
    ],
    logros: [
      'Desarrollo servicios con Node.js y Fastify, sobre PostgreSQL y Redis.',
      'Implemento autenticación JWT y control de roles y permisos.',
      'Implemento funciones en AWS Lambda y API Gateway.',
      'Implemento integraciones con servicios externos y automatizaciones.',
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
  tema: { etiqueta: 'Tema', dia: 'Modo claro', noche: 'Modo oscuro' },
  navegacion: {
    etiqueta: 'Secciones',
    menu: 'Menú',
    sobreMi: 'Sobre mí',
    tecnologias: 'Tecnologías',
    trabajo: 'Trabajo',
    contacto: 'Contacto',
  },
  inicio: {
    menu: 'Secciones',
    valor: 'Integraciones, APIs y sistemas de gestión',
    escribir: 'Escribime',
    descripciones: {
      sobreMi: 'Perfil y recorrido',
      tecnologias: 'Stack y herramientas',
      trabajo: 'Proyectos y experiencia',
      contacto: 'Escribime un mensaje',
    },
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
      etiqueta: 'Recorrido profesional y formación',
      tipos: { experiencia: 'Experiencia', formacion: 'Formación' },
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
  contacto: {
    titulo: 'Contacto',
    para: 'Para:',
    etiquetas: {
      nombre: 'Nombre y apellido',
      email: 'Email',
      telefono: 'Teléfono',
      motivo: 'Motivo',
      mensaje: 'Mensaje',
    },
    opcional: '(opcional)',
    motivos: { puesto: 'Puesto de trabajo', freelance: 'Proyecto freelance', otro: 'Otro' },
    enviar: 'Enviar',
    enviando: 'Enviando',
    errores: {
      nombre: 'Falta tu nombre.',
      email: 'Falta tu email.',
      emailInvalido: 'Este email no parece válido. Revisá que tenga @ y un dominio.',
      mensaje: 'Falta el mensaje.',
    },
    errorEnvio: 'No se pudo enviar la carta. Lo que escribiste sigue acá: probá de nuevo o escribime a',
    enviado: {
      titulo: 'Carta enviada',
      texto: 'Gracias por escribir. Te respondo al email que dejaste.',
      otra: 'Escribir otra carta',
    },
    directo: { titulo: 'Contacto directo', copiar: 'Copiar email', copiado: 'Email copiado' },
  },
}

export type Textos = typeof es
