import type { EntryId, EntryText } from '../about'
import type { CategoryId } from '../technologies'
import type { AreaId, AreaText } from '../experience'
import type { ProjectId, ProjectText } from '../projects'

const areas: Record<AreaId, AreaText> = {
  ecommerce: {
    tab: 'E-commerce',
    title: 'Integraciones y sistemas e-commerce',
    description: 'Integraciones de pago, personalización de checkout y funcionalidades comerciales para tiendas online.',
    achievements: [
      'Integración, mantenimiento y mejora de Mercado Pago y MODO.',
      'Adaptación de checkout, promociones, descuentos y gift cards.',
      'Automatización de procesos y reportes.',
    ],
  },
  authentication: {
    tab: 'Seguridad y roles',
    title: 'Autenticación, roles y permisos',
    description:
      'Implementación de mecanismos de autenticación y autorización para aplicaciones con diferentes tipos de usuarios.',
    achievements: [
      'Autenticación mediante JWT.',
      'Control de acceso basado en roles y permisos.',
      'Protección de endpoints y operaciones del backend.',
    ],
  },
  automation: {
    tab: 'Automatización e IA',
    title: 'Automatización y sistemas con IA',
    description:
      'Desarrollo backend para una plataforma de reclutamiento con procesos automatizados e integraciones externas.',
    achievements: [
      'Desarrollo de funcionalidades para procesos de reclutamiento.',
      'Integración de servicios externos y migración de flujos automatizados a código.',
      'Implementación de servicios backend y funciones serverless.',
    ],
  },
}

const projects: Record<ProjectId, ProjectText> = {
  salonSystem: {
    title: 'Sistema de gestión para salones de belleza',
    role: 'Desarrolladora Full Stack · Responsable del proyecto',
    summary:
      'Aplicación web full stack pensada para simplificar la operación diaria de salones de belleza y profesionales independientes.',
    challenge:
      'Cada usuario necesita acceder a funciones e información distintas: la administración configura el sistema, recepción gestiona turnos y clientes, y cada profesional accede a lo relativo a su propio trabajo. Diseñé un modelo de seguridad centralizado con JWT, BCrypt y Spring Security, con tres roles (ADMIN, RECEPTIONIST y PROFESSIONAL) y permisos validados antes de cada operación protegida.',
    list: {
      title: 'Funcionalidades principales',
      items: [
        'Agenda de turnos y gestión de disponibilidad.',
        'Gestión de clientes, servicios y profesionales.',
        'Reservas de varios servicios con seguimiento de estado.',
        'Precios, señas e intervalos de regreso sugeridos.',
        'Autenticación y control de acceso por roles.',
      ],
    },
    context:
      'Desarrollado de forma independiente, desde el diseño de la base de datos y las APIs REST hasta la implementación del frontend. Actualmente en desarrollo.',
  },
  festival: {
    title: 'Rock & EDM Festival',
    summary: 'Proyecto frontend con temática de festival, con información del line up, galería y entradas.',
  },
  frontendStore: {
    title: 'Frontend Store',
    summary: 'Simulación de una tienda de remeras con secciones de tienda, nosotros y descripción de producto.',
  },
}

const entries: Record<EntryId, EntryText> = {
  current: { date: '2026 – actualidad', title: 'Desarrolladora Backend', place: 'Unio' },
  waia: { date: '2024 – 2026', title: 'Desarrolladora Full Stack', place: 'WAIA' },
  cybersecurity: { date: '2025 – actualidad', title: 'Ciberseguridad', place: 'Educación IT' },
  fullStack: { date: '2023', title: 'Desarrollo Full Stack', place: 'Egg Live · Udemy' },
}

const categories: Record<CategoryId, string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Bases de datos',
  'e-commerce': 'E‑commerce',
  tools: 'Herramientas',
  ai: 'IA',
}

export const es = {
  role: 'Desarrolladora Full Stack',
  language: 'Idioma',
  theme: { label: 'Tema', system: 'Sistema', light: 'Claro', dark: 'Oscuro' },
  navigation: {
    label: 'Secciones',
    menu: 'Menú',
    about: 'Sobre mí',
    technologies: 'Tecnologías',
    experience: 'Experiencia',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  home: {
    menu: 'Secciones',
    value: 'Desarrollo soluciones web a medida: sitios, integraciones, automatizaciones y sistemas de gestión.',
    write: 'Escribime',
    descriptions: {
      about: 'Perfil y recorrido',
      technologies: 'Stack y herramientas',
      experience: 'Integraciones, seguridad y automatización',
      projects: 'Desarrollos propios y publicados',
      contact: 'Escribime un mensaje',
    },
  },
  about: {
    title: 'Sobre mí',
    portrait: 'Retrato pixel art de',
    contact: 'Enlaces de contacto',
    location: 'Trabajo remoto',
    introduction: [
      'Me gusta resolver problemas completos: entender qué se necesita, evaluar alternativas, proponer una solución con un alcance claro y desarrollarla hasta que funcione.',
      'Hoy trabajo como Desarrolladora Backend en Unio y tomo proyectos freelance, siempre en modalidad remota.',
      'Me muevo tanto en frontend como en backend, y es en el backend donde más quiero seguir creciendo: APIs, integraciones, bases de datos y automatizaciones.',
    ],
    career: {
      label: 'Trayectoria resumida',
      columns: { experience: 'Experiencia laboral', training: 'Formación' },
      entries,
    },
  },
  technologies: {
    title: 'Tecnologías',
    label: 'Categorías de tecnologías',
    categories,
    cta: {
      title: '¿Querés ver cómo las uso?',
      text: 'En Experiencia cuento qué problemas resolví con ellas.',
      experience: 'Ver experiencia',
    },
  },
  experience: {
    title: 'Experiencia',
    intro: 'Soluciones y funcionalidades que desarrollé profesionalmente.',
    label: 'Áreas de experiencia',
    whatIDid: 'Qué desarrollé',
    technologies: 'Tecnologías',
    cta: {
      title: '¿Tenés que resolver algo parecido?',
      text: 'Contame qué necesitás y te respondo por email.',
      journey: 'Ver mi recorrido',
    },
    areas,
  },
  projects: {
    title: 'Proyectos',
    intro: 'Desarrollos propios y proyectos publicados.',
    label: 'Lista de proyectos',
    cta: {
      title: '¿Tenés un proyecto en mente?',
      text: 'Contame qué necesitás y te respondo por email.',
      experience: 'Ver experiencia',
    },
    back: 'Volver a Proyectos',
    challenge: 'El desafío',
    context: 'Contexto',
    technologies: 'Tecnologías',
    viewSite: 'Ver sitio publicado',
    imageOf: 'Captura de',
    types: { project: 'Proyecto propio', training: 'Formación' },
    statuses: { development: 'En desarrollo', published: 'Publicado' },
    items: projects,
  },
  contact: {
    title: 'Contacto',
    to: 'Para:',
    labels: {
      name: 'Nombre y apellido',
      email: 'Email',
      phone: 'Teléfono',
      reason: 'Motivo',
      message: 'Mensaje',
    },
    optional: '(opcional)',
    reasons: { job: 'Puesto de trabajo', freelance: 'Proyecto freelance', other: 'Otro' },
    send: 'Enviar',
    sending: 'Enviando…',
    errors: {
      name: 'Falta tu nombre.',
      email: 'Falta tu email.',
      invalidEmail: 'Este email no parece válido. Revisá que tenga @ y un dominio.',
      message: 'Falta el mensaje.',
    },
    sendError: 'No se pudo enviar la carta. Lo que escribiste sigue acá: probá de nuevo o escribime a',
    sent: {
      title: 'Carta enviada',
      text: 'Gracias por escribir. Te respondo al email que dejaste.',
      another: 'Escribir otra carta',
    },
    direct: { title: 'Contacto directo', copy: 'Copiar email', copied: 'Email copiado' },
  },
}

export type Texts = typeof es
