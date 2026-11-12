import type { IdEntrada, TextoEntrada } from '../sobreMi'
import type { IdCategoria } from '../tecnologias'
import type { IdArea, TextoArea } from '../experiencia'
import type { IdProyecto, TextoProyecto } from '../proyectos'

const areas: Record<IdArea, TextoArea> = {
  ecommerce: {
    pestana: 'E-commerce',
    titulo: 'Integraciones y sistemas e-commerce',
    descripcion: 'Integraciones de pago, personalización de checkout y funcionalidades comerciales para tiendas online.',
    logros: [
      'Integración, mantenimiento y mejora de Mercado Pago, MODO y GOcuotas.',
      'Adaptación de checkout, promociones, descuentos y gift cards.',
      'Automatización de procesos y reportes.',
    ],
  },
  autenticacion: {
    pestana: 'Seguridad y roles',
    titulo: 'Autenticación, roles y permisos',
    descripcion:
      'Implementación de mecanismos de autenticación y autorización para aplicaciones con diferentes tipos de usuarios.',
    logros: [
      'Autenticación mediante JWT.',
      'Control de acceso basado en roles y permisos.',
      'Protección de endpoints y operaciones del backend.',
    ],
  },
  automatizacion: {
    pestana: 'Automatización e IA',
    titulo: 'Automatización y sistemas con IA',
    descripcion:
      'Desarrollo backend para una plataforma de reclutamiento con procesos automatizados e integraciones externas.',
    logros: [
      'Desarrollo de funcionalidades para procesos de reclutamiento.',
      'Integración de servicios externos y migración de flujos automatizados a código.',
      'Implementación de servicios backend y funciones serverless.',
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

const entradas: Record<IdEntrada, TextoEntrada> = {
  actual: { fecha: '2026 – actualidad', titulo: 'Desarrolladora Backend', lugar: 'Startup de automatización con IA' },
  waia: { fecha: '2024 – 2026', titulo: 'Desarrolladora Full Stack', lugar: 'WAIA' },
  ciberseguridad: { fecha: '2025 – actualidad', titulo: 'Ciberseguridad', lugar: 'Educación IT' },
  fullStack: { fecha: '2023', titulo: 'Desarrollo Full Stack', lugar: 'Egg Live · Udemy' },
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
    retrato: 'Retrato pixel art de',
    contacto: 'Enlaces de contacto',
    presentacion:
      'Soy desarrolladora de software orientada al backend. Me interesa diseñar soluciones, trabajar con la lógica de las aplicaciones e integrar servicios. Disfruto especialmente transformar necesidades en funcionalidades concretas.',
    trayectoria: {
      etiqueta: 'Trayectoria resumida',
      columnas: { experiencia: 'Experiencia laboral', formacion: 'Formación' },
      entradas,
    },
  },
  tecnologias: {
    titulo: 'Tecnologías',
    etiqueta: 'Categorías de tecnologías',
    categorias,
    cierre: {
      titulo: '¿Querés ver cómo las uso?',
      texto: 'En Experiencia cuento qué problemas resolví con ellas.',
      experiencia: 'Ver experiencia',
    },
  },
  experiencia: {
    titulo: 'Experiencia',
    intro: 'Soluciones y funcionalidades que desarrollé profesionalmente.',
    etiqueta: 'Áreas de experiencia',
    queHice: 'Qué desarrollé',
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
    cierre: {
      titulo: '¿Tenés un proyecto en mente?',
      texto: 'Contame qué necesitás y te respondo por email.',
      experiencia: 'Ver experiencia',
    },
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
