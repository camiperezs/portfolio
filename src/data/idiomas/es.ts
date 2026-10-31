import { certificados } from '../sobreMi'
import type { IdParada, TextoParada } from '../sobreMi'
import type { IdCategoria } from '../tecnologias'

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
  pendiente: 'Esta sección se construye en el próximo paso.',
  navegacion: {
    etiqueta: 'Secciones',
    sobreMi: 'Sobre mí',
    tecnologias: 'Tecnologías',
    trabajo: 'Trabajo',
    contacto: 'Contacto',
  },
  inicio: {
    menu: 'Principal',
    redes: 'Perfiles profesionales',
    abrir: 'Abrir pergamino',
    cerrar: 'Cerrar pergamino',
  },
  sobreMi: {
    titulo: 'Sobre mí',
    secciones: 'Secciones de Sobre mí',
    pestanas: { perfil: 'Perfil', recorrido: 'Recorrido' },
    retrato: 'Retrato pixel art de',
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
  trabajo: { titulo: 'Trabajo' },
  contacto: { titulo: 'Contacto' },
}

export type Textos = typeof es
