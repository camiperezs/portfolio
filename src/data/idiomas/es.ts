import { certificados } from '../sobreMi'
import type { IdParada, TextoParada } from '../sobreMi'
import type { IdCategoria } from '../tecnologias'
import type { IdArea, TextoArea } from '../experiencia'
import type { IdProyecto, TextoProyecto } from '../proyectos'

const areas: Record<IdArea, TextoArea> = {
  ecommerce: {
    titulo: 'Integraciones y sistemas e-commerce',
    problema:
      'Tiendas en producción que necesitaban cobrar con medios de pago locales y adaptar el checkout a sus reglas comerciales.',
    logros: [
      'Integré Mercado Pago, MODO y GOcuotas mediante APIs REST, OAuth y webhooks, y mantuve y mejoré esas integraciones.',
      'Adapté los flujos de checkout y pago a los requisitos de cada negocio.',
      'Implementé reglas comerciales para promociones, descuentos y gift cards.',
      'Automaticé procesos y reportes, y relevé requerimientos directamente con clientes.',
    ],
  },
  autenticacion: {
    titulo: 'Autenticación, roles y permisos',
    problema: 'Cada usuario tiene que acceder solo a las funciones y los datos que le corresponden.',
    logros: [
      'Implemento autenticación con JWT.',
      'Implemento control de roles y permisos en los servicios del backend.',
      'Protejo los endpoints validando los permisos antes de cada operación.',
    ],
  },
  automatizacion: {
    titulo: 'Automatización y sistemas con IA',
    problema: 'Procesos manuales que necesitaban automatizarse e integrarse con otros servicios.',
    logros: [
      'Desarrollo funcionalidades para una plataforma de reclutamiento.',
      'Integro servicios externos y automatizo procesos.',
      'Migro flujos de automatización a código propio.',
      'Desarrollo servicios con Node.js y Fastify, y funciones en AWS Lambda y API Gateway.',
    ],
  },
}

const proyectos: Record<IdProyecto, TextoProyecto> = {
  sistemaSalon: {
    titulo: 'Sistema de gestión para salones de belleza',
    rol: 'Desarrolladora Full Stack · Responsable del proyecto',
    resumen:
      'Aplicación web full stack pensada para simplificar la operación diaria de salones de belleza y profesionales independientes.',
    desafio:
      'Cada usuario necesita acceder a funciones e información distintas: la administración configura el sistema, recepción gestiona turnos y clientes, y cada profesional accede a lo relativo a su propio trabajo. Diseñé un modelo de seguridad centralizado con JWT, BCrypt y Spring Security, con tres roles (ADMIN, RECEPTIONIST y PROFESSIONAL) y permisos validados antes de cada operación protegida.',
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
  tema: { etiqueta: 'Tema', sistema: 'Sistema', dia: 'Claro', noche: 'Oscuro' },
  navegacion: {
    etiqueta: 'Secciones',
    menu: 'Menú',
    sobreMi: 'Sobre mí',
    tecnologias: 'Tecnologías',
    experiencia: 'Experiencia',
    proyectos: 'Proyectos',
    contacto: 'Contacto',
  },
  inicio: {
    menu: 'Secciones',
    valor: 'Integraciones, APIs y sistemas de gestión',
    escribir: 'Escribime',
    descripciones: {
      sobreMi: 'Perfil y recorrido',
      tecnologias: 'Stack y herramientas',
      experiencia: 'Integraciones, seguridad y automatización',
      proyectos: 'Desarrollos propios y publicados',
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
  experiencia: {
    titulo: 'Experiencia',
    intro: 'Áreas en las que trabajé de forma profesional: qué problema había, qué hice y con qué tecnologías.',
    etiqueta: 'Áreas de experiencia',
    problema: 'El problema',
    queHice: 'Qué hice',
    tecnologias: 'Tecnologías',
    cierre: {
      titulo: '¿Tenés que resolver algo parecido?',
      texto: 'Contame qué necesitás y te respondo por email.',
      recorrido: 'Ver mi recorrido',
    },
    areas,
  },
  proyectos: {
    titulo: 'Proyectos',
    intro: 'Desarrollos propios y proyectos publicados.',
    etiqueta: 'Lista de proyectos',
    volver: 'Volver a Proyectos',
    desafio: 'El desafío',
    contexto: 'Contexto',
    tecnologias: 'Tecnologías',
    verSitio: 'Ver sitio publicado',
    imagenDe: 'Captura de',
    tipos: { proyecto: 'Proyecto propio', formacion: 'Formación' },
    estados: { desarrollo: 'En desarrollo', publicado: 'Publicado' },
    items: proyectos,
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
    enviando: 'Enviando…',
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
